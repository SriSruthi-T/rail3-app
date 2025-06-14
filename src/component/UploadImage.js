'use client';
import React, { useState, useEffect } from 'react';
import { storage } from '@/lib/firebase';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const UploadImage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const maxSizeMB = 5;

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const folderRef = ref(storage, 'images/');
    try {
      const res = await listAll(folderRef);
      const urls = await Promise.all(res.items.map((item) => getDownloadURL(item)));
      setImageList(urls);
    } catch (err) {
      toast.error('Failed to load images');
    }
  };

  const handleUpload = async () => {
    if (!imageUpload) return toast.error('Please select an image');

    if (!allowedTypes.includes(imageUpload.type)) {
      return toast.error('Only JPEG or PNG files are allowed');
    }

    if (imageUpload.size > maxSizeMB * 1024 * 1024) {
      return toast.error(`Image must be smaller than ${maxSizeMB}MB`);
    }

    const imageRef = ref(storage, `images/${uuidv4()}-${imageUpload.name}`);
    try {
      setUploading(true);
      await uploadBytes(imageRef, imageUpload);
      toast.success('Image uploaded');
      setImageUpload(null);
      fetchImages();
    } catch (err) {
      toast.error('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (url) => {
    try {
      const fileRef = ref(storage, decodeURIComponent(url.split('/o/')[1].split('?')[0]));
      await deleteObject(fileRef);
      toast.success('Deleted');
      fetchImages();
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload an Image</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageUpload(e.target.files[0])}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {imageList.map((url, i) => (
          <div key={i} className="relative group">
            <img src={url} alt={`upload-${i}`} className="rounded shadow" />
            <button
              onClick={() => handleDelete(url)}
              className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImage;


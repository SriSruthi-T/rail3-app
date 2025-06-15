'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LocationViewer() {
  const [nearbyCount, setNearbyCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNearbyCount(5);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.title = 'Locations | SmartRailNAV';
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Station Locations</h1>
      <p style={styles.description}>
        {loading ? 'Loading map data...' : `Found ${nearbyCount} nearby stations.`}
      </p>
      <p style={styles.time}>Current Time: {currentTime}</p>
      <div style={styles.imageWrapper}>
        <Image src="/location.jpg" alt="Station Map" width={800} height={400} style={styles.image} />
      </div>
      <Link href="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  );
}

const styles = {
  page: { padding: 20, fontFamily: 'Arial, sans-serif', textAlign: 'center', color: '#0070f3' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 ,color: '#0070f3' },
  description: { fontSize: 16, marginBottom: 10 },
  time: { fontSize: 14, marginBottom: 20, color: '#555' },
  imageWrapper: { display: 'flex', justifyContent: 'center' },
  image: { borderRadius: 10 },
  backLink: { display: 'block', marginTop: 30, color: '#0070f3', textDecoration: 'none' }
};
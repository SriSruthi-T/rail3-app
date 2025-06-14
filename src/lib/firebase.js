// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAaWK54l-96WBgg2RSqD3VleQEON8cJ6M',
  authDomain: 'smartrailnav.firebaseapp.com',
  projectId: 'smartrailnav',
  storageBucket: 'smartrailnav.appspot.com', // 🔧 fix: use .app**spot**.com
  messagingSenderId: '976695846933',
  appId: '1:976695846933:web:aa729f0a6ebd3a3c86861c',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);



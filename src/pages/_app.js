import '@/styles/globals.css';
import { UserProvider } from '../component/UserContext';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </UserProvider>
  );
}


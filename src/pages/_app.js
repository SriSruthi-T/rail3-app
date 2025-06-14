import '@/styles/globals.css';
import { UserProvider } from '../component/UserContext';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      {/* Toast notifications (top-right corner) */}
      <Toaster position="top-right" reverseOrder={false} />
      {/* Main component for the current page */}
      <Component {...pageProps} />
    </UserProvider>
  );
}


// pages/_app.js
import '@/styles/globals.css';
import { UserProvider } from '../component/UserContext';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}


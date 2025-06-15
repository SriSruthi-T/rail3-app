import '@/styles/globals.css'; // Adjust the path if needed
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* Only load analytics in production */}
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </>
  );
}

export default MyApp;



'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const styles = {
  page: { fontFamily: 'Arial, sans-serif', padding: 20 },
  header: { backgroundColor: '#f8f9fa', padding: '10px 0' },
  navContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: 24, fontWeight: 'bold', marginLeft: 20 },
  nav: { display: 'flex', gap: '15px', marginRight: 20 },
  navLink: { textDecoration: 'none', color: '#333' },
  main: { textAlign: 'center', marginTop: 50 },
  welcome: { fontSize: 22, color: '#0070f3', marginBottom: 10 },
  clock: { fontSize: 16, color: '#555', marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold' },
  subtitle: { fontSize: 18, margin: '10px 0 20px' },
  button: {
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: 5,
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: 10
  },
  imageWrapper: { marginTop: 30 },
  image: { borderRadius: 10, width: '100%', height: 'auto' }
};

export default function Home() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeMessage('Welcome to SmartRailNAV 🚆');
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = 'Home | SmartRailNAV';
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date().toLocaleTimeString();
      setCurrentTime(now);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: 50, color: '#0070f3' }}>Loading...</p>;
  }

  return (
    <div style={styles.page}>
      <Head>
        <title>Home | SmartRailNAV</title>
        <meta name="description" content="Explore Indian railway stations, facilities, and location info with SmartRailNAV." />
      </Head>

      <header style={styles.header}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>SMARTRAILNAV</div>
          <nav style={styles.nav}>
            <Link href="/stations"><span style={styles.navLink}>Stations</span></Link>
            <Link href="/facilities"><span style={styles.navLink}>Facilities</span></Link>
            <Link href="/locations"><span style={styles.navLink}>Locations</span></Link>
            <Link href="/login"><span style={styles.navLink}>Log In</span></Link>
            <Link href="/contact"><span style={styles.navLink}>Contact Us</span></Link>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        <h2 style={styles.welcome}>{welcomeMessage}</h2>
        <h3 style={styles.clock}>Current Time: {currentTime}</h3>
        <h1 style={styles.title}>Explore the Railway Stations, Facilities, and Locations</h1>
        <p style={styles.subtitle}>Find your nearest station, explore facilities, and get directions with ease.</p>
        <Link href="/stations" style={styles.button}>Find a Station</Link>
        <div style={styles.imageWrapper}>
          <Image
            src="/rail4.jpg"
            alt="Train Station"
            width={1000}
            height={500}
            style={styles.image}
            priority
          />
        </div>
      </main>
    </div>
  );
}

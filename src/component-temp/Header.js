import Link from 'next/link';

export default function Header() {
  const styles = {
    header: { backgroundColor: '#f8f9fa', padding: '10px 0' },
    navContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    logo: { fontSize: 24, fontWeight: 'bold', marginLeft: 20, color: '#0070f3' },
    nav: { display: 'flex', gap: '15px', marginRight: 20 },
    navLink: { textDecoration: 'none', color: '#333' },
  };

  return (
    <header style={styles.header}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>SMARTRAILNAV</div>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/Stations" style={styles.navLink}>Stations</Link>
          <Link href="/Facilities" style={styles.navLink}>Facilities</Link>
          <Link href="/Locations" style={styles.navLink}>Locations</Link>
        </nav>
      </div>
    </header>
  );
}

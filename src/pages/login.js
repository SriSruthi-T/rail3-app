import Link from 'next/link';
import LoginForm from '../component/LoginForm';

export default function LoginPage() {
  const styles = {
    page: { fontFamily: 'Arial, sans-serif', padding: 20 },
    header: { backgroundColor: '#f8f9fa', padding: '10px 0' },
    navContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    logo: { fontSize: 24, fontWeight: 'bold', marginLeft: 20,color:'#0070f3' },
    nav: { display: 'flex', gap: '15px', marginRight: 20 },
    navLink: { textDecoration: 'none', color: '#333' },
    main: { textAlign: 'center', marginTop: 50 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 ,color:'#0070f3'},
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>SMARTRAILNAV</div>
          <nav style={styles.nav}>
            <Link href="/" style={styles.navLink}>Home</Link>
            <Link href="/stations" style={styles.navLink}>Stations</Link>
            <Link href="/facilities" style={styles.navLink}>Facilities</Link>
            <Link href="/locations" style={styles.navLink}>Locations</Link>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Login</h1>
        <LoginForm />
      </main>
    </div>
  );
}
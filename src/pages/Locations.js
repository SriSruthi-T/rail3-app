import Image from 'next/image';
import Link from 'next/link';
import LocationViewer from '@/component/LocationViewer';

export default function Locations() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Station Locations</h1>
      <p style={styles.description}>Explore our interactive map to find stations near you or discover new destinations.</p>
      <div style={styles.imageWrapper}>
        <Image src="/location.jpg" alt="Station Map" width={800} height={400} style={styles.image} />
      </div>
      <Link href="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  );
}

const styles = {
  page: { padding: 20, fontFamily: 'Arial, sans-serif', textAlign: 'center' ,color: '#0070f3'},
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 ,color: '#0070f3'},
  description: { fontSize: 16, marginBottom: 20 },
  imageWrapper: { display: 'flex', justifyContent: 'center' },
  image: { borderRadius: 10 },
  backLink: { display: 'block', marginTop: 30, color: '#0070f3', textDecoration: 'none' }
};

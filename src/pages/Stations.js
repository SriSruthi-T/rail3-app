import Link from 'next/link';

export default function Stations() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Stations Overview</h1>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>New York Central</h3>
          <p>Located in the heart of NYC, offering fast connections to major cities.</p>
        </div>
        <div style={styles.card}>
          <h3>Los Angeles Union</h3>
          <p>One of the largest stations on the West Coast with state-of-the-art services.</p>
        </div>
        <div style={styles.card}>
          <h3>Chicago Union</h3>
          <p>Historic station with modern amenities, providing easy access to the Midwest.</p>
        </div>
      </div>
      <Link href="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  );
}

const styles = {
  page: { padding: 20, fontFamily: 'Arial, sans-serif' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  grid: { display: 'flex', gap: 20, flexWrap: 'wrap' },
  card: { flex: '1 0 30%', padding: 20, border: '1px solid #ccc', borderRadius: 8 },
  backLink: { display: 'block', marginTop: 30, color: '#0070f3', textDecoration: 'none' }
};

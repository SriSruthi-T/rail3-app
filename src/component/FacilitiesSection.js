// components/FacilitiesSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function FacilitiesSection() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Facilities Available</h1>
      <div style={styles.grid}>
        <div style={styles.card}>
          <Image src="/waiting-room.jpg" alt="Waiting Room" width={300} height={200} style={styles.image} />
          <h3>Comfortable Waiting Rooms</h3>
          <p>Relax in spacious waiting areas with free Wi-Fi, seating, and refreshments.</p>
        </div>
        <div style={styles.card}>
          <Image src="/food-court.jpg" alt="Food Court" width={300} height={200} style={styles.image} />
          <h3>Food Courts</h3>
          <p>Enjoy a variety of cuisines at our food courts available at major stations.</p>
        </div>
        <div style={styles.card}>
          <Image src="/charging-station.jpg" alt="Charging Stations" width={300} height={200} style={styles.image} />
          <h3>Charging Stations</h3>
          <p>Charge your devices at convenient stations throughout the premises.</p>
        </div>
      </div>
      <Link href="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  );
}

const styles = {
  page: { padding: 20, fontFamily: 'Arial, sans-serif' ,color: '#0070f3' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 ,color: '#0070f3' },
  grid: { display: 'flex', gap: 20, flexWrap: 'wrap' },
  card: { flex: '1 0 30%', padding: 20, border: '1px solid #ccc', borderRadius: 8 },
  image: { borderRadius: 8, marginBottom: 10 },
  backLink: { display: 'block', marginTop: 30, color: '#0070f3', textDecoration: 'none' }
};

import Header from '../component/Header';
import LoginForm from '../component/LoginForm';
import SmartRailBot from '../component/SmartRailBot';

export default function LoginPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      <Header />

      <main style={{ maxWidth: 600, margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 32, color: '#0070f3', marginBottom: 30 }}>Login</h1>

        <LoginForm />

        <div style={{ marginTop: 50 }}>
          <SmartRailBot />
        </div>
      </main>
    </div>
  );
}


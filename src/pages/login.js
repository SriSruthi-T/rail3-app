import Header from '../component/Header';
import LoginForm from '../component/LoginForm';
import SmartRailBot from '../component/SmartRailBot';

export default function LoginPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <Header />
      <main style={{ textAlign: 'center', marginTop: 50 }}>
        <h1 style={{ fontSize: 28, color: '#0070f3' }}>Login</h1>
        <LoginForm />
        <SmartRailBot />
      </main>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (email && !email.includes('@')) {
      setErrorMessage('Invalid email format');
    } else {
      setErrorMessage('');
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Both fields are required');
      return;
    }

    router.push('/'); // redirect to index.js
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 15, alignItems: 'center', marginTop: 20 }} onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button style={{ backgroundColor: '#0070f3', color: '#fff', padding: 10, border: 'none', borderRadius: 5 }} type="submit">Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
}


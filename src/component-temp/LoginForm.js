'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('❌ Invalid email format');
    } else if (phone && !/^\d{10}$/.test(phone)) {
      setErrorMessage('❌ Phone number must be 10 digits');
    } else {
      setErrorMessage('');
    }
  }, [email, phone]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !password) {
      setErrorMessage('⚠️ All fields are required.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('❌ Please enter a valid email.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage('❌ Phone number must be 10 digits.');
      return;
    }

    // Simulate login or registration logic
    setErrorMessage('');
    setSuccessMessage('✅ Login Successful! Redirecting...');

    setTimeout(() => {
      router.push('/'); // Redirect to homepage after 2 seconds
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        alignItems: 'center',
        marginTop: 40,
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 20,
        border: '1px solid #ccc',
        borderRadius: 10,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <h2 style={{ color: '#0070f3' }}>Login to SmartRailNav</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ width: '100%', padding: 10 }}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        style={{ width: '100%', padding: 10 }}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ width: '100%', padding: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ width: '100%', padding: 10 }}
      />

      <button
        type="submit"
        style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        Login
      </button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form>
  );
}




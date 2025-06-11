'use client';

import { useState, useEffect } from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    marginTop: 20,
  },
  input: {
    padding: '10px 15px',
    width: '300px',
    fontSize: 16,
    borderRadius: 5,
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: 5,
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
  },
  successMessage: {
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  errorMessage: {
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold',
  },
};

// ContactForm.js
export default function ContactForm() {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginTime, setLoginTime] = useState(null);

  useEffect(() => {
    if (email && !email.includes('@')) {
      setErrorMessage('Invalid email format');
    } else {
      setErrorMessage('');
    }
  }, [email]);

  useEffect(() => {
    if (isLoggedIn) {
      const time = new Date().toLocaleTimeString();
      setLoginTime(time);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    console.log('Login form loaded');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Both fields are required');
      return;
    }

    setIsLoggedIn(true);
    console.log('Logged in with:', { email, password });
  };

  return (
    <>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Log In</button>
      </form>

      {errorMessage && <div style={styles.errorMessage}>⚠️ {errorMessage}</div>}
      {isLoggedIn && (
        <div style={styles.successMessage}>
          ✅ Successfully logged in at {loginTime}!
        </div>
      )}
    </>
  );
}
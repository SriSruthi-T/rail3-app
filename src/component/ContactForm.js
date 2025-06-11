import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    setCharCount(message.length);
  }, [message]);

  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(email));
  }, [email]);

  useEffect(() => {
    if (submitted) {
      console.log('Form submitted:', { name, email, message });
    }
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message || !isEmailValid) return;

    setSubmitted(true);

    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form">
      <h2>Send a Message</h2>
      {submitted ? (
        <p className="thank-you">Thanks for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderColor: isEmailValid ? '#ccc' : 'red' }}
            />
            {!isEmailValid && <small style={{ color: 'red' }}>Invalid email</small>}
          </label>
          <label>
            Message:
            <textarea
              value={message}
              placeholder="Your Message"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <small>{charCount}/500 characters</small>
          </label>
          <button type="submit">Send</button>
        </form>
      )}

      <style jsx>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          background: #fff;
          color: #0b3d91;
        }

        label {
          display: flex;
          flex-direction: column;
          font-weight: 500;
           color: #0070f3;
        }

        input,
        textarea {
          margin-top: 0.25rem;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        button {
          padding: 0.75rem;
          background-color: #0b3d91;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
        }

        button:hover {
          background-color: #092c6b;
        }

        .thank-you {
          font-size: 1.2rem;
          color: green;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
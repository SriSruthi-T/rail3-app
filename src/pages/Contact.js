import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="contact-container">
      <h1>Contact Us</h1>
      <ContactForm />
      <style jsx>{`
        .contact-container {
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
          font-family: 'Inter', sans-serif;
        
        }
        h1 {
          text-align: center;
          margin-bottom: 1rem;
           color: #0070f3;
        }
      `}</style>
    </main>
  );
}

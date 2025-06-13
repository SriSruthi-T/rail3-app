'use client';

import { useState } from 'react';
import axios from 'axios';

export default function SmartRailBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      // Send only the latest user message as `prompt`
      const res = await axios.post('/api/chatbot', { prompt: input });

      // Append bot reply to chat
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: res.data.reply.content },
      ]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: '❌ Failed to respond. Try again later.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, border: '1px solid #ccc', marginTop: 30, borderRadius: 8 }}>
      <h3 style={{ textAlign: 'center', color: 'blue' }}>Chat with SmartRailBot</h3>

      <div style={{ maxHeight: 250, overflowY: 'auto', marginBottom: 10 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 8 }}>
            <strong>{msg.role === 'user' ? '🧑‍💼 You' : '🤖 Bot'}:</strong>{' '}
            <span style={{ marginLeft: 6 }}>{msg.content}</span>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
          style={{ width: '75%', padding: 8 }}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            marginLeft: 10,
            padding: '8px 16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

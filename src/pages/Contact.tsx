import React from "react";

export default function Contact() {
  return (
    <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', margin: '2rem auto', maxWidth: 600, textAlign: 'center' }}>
      <h1 style={{ color: '#2563eb', marginBottom: '1rem' }}>Contact</h1>
      <p style={{ fontSize: '1.1rem' }}>ご連絡は下記までお願いします。</p>
      <p>
        GitHub: <a href="https://github.com/iesuy-ryanagit" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>iesuy-ryanagit</a>
      </p>
      <p>
        Linkdin: <a href="www.linkedin.com/in/ryusei-yanagita-bb4a21322" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>Linkdin</a>
      </p>
    </section>
  );
}

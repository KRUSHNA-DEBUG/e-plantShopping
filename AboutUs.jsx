import React from 'react';

function AboutUs() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2e7d32' }}>About Us</h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
        Welcome to <strong>Paradise Nursery</strong> — your one-stop destination for all things green and beautiful!
        Founded with a passion for nature and a love for plants, we bring the freshest, healthiest plants
        right to your doorstep.
      </p>

      <h2 style={{ color: '#388e3c', marginTop: '30px' }}>Our Mission</h2>
      <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
        At Paradise Nursery, our mission is to make every home a greener, happier place.
        We believe that plants are more than just decorations — they are living companions that
        purify the air, reduce stress, and bring joy to everyday life.
      </p>

      <h2 style={{ color: '#388e3c', marginTop: '30px' }}>Why Choose Us?</h2>
      <ul style={{ fontSize: '1rem', lineHeight: '2', color: '#555' }}>
        <li>🌱 Over 200+ varieties of indoor and outdoor plants</li>
        <li>🚚 Fast and safe delivery to your home</li>
        <li>💚 Expert gardening advice and after-sale support</li>
        <li>🌍 Eco-friendly and sustainable practices</li>
        <li>⭐ Trusted by thousands of happy customers</li>
      </ul>

      <h2 style={{ color: '#388e3c', marginTop: '30px' }}>Contact Us</h2>
      <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
        📧 Email: support@paradisenursery.com <br />
        📞 Phone: +1 (800) 123-4567 <br />
        📍 Address: 123 Green Valley Road, Plant City, USA
      </p>
    </div>
  );
}

export default AboutUs;

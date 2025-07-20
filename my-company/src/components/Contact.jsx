import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been received.`);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ 
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: 'white',
      margin: '20px auto',
      maxWidth: '600px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#333',
        fontSize: '2.5em',
        marginBottom: '20px'
      }}>
        Contact Us
      </h1>
      <p style={{ 
        fontSize: '1.1em',
        color: '#666',
        lineHeight: '1.6',
        marginBottom: '30px'
      }}>
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
      <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ 
            display: 'block', 
            width: '100%',
            margin: '15px 0',
            padding: '12px',
            border: '2px solid #e9ecef',
            borderRadius: '6px',
            fontSize: '16px',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = '#333'}
          onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ 
            display: 'block', 
            width: '100%',
            margin: '15px 0',
            padding: '12px',
            border: '2px solid #e9ecef',
            borderRadius: '6px',
            fontSize: '16px',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = '#333'}
          onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ 
            display: 'block', 
            width: '100%',
            margin: '15px 0',
            padding: '12px',
            border: '2px solid #e9ecef',
            borderRadius: '6px',
            fontSize: '16px',
            boxSizing: 'border-box',
            resize: 'vertical',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = '#333'}
          onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
        />
        <button 
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#333',
            color: 'white',
            padding: '15px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '10px'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

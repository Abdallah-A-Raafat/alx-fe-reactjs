function About() {
  return (
    <div style={{ 
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: 'white',
      margin: '20px auto',
      maxWidth: '800px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#333',
        fontSize: '2.5em',
        marginBottom: '20px'
      }}>
        About Us
      </h1>
      <p style={{ 
        fontSize: '1.1em',
        color: '#666',
        lineHeight: '1.8',
        maxWidth: '600px',
        margin: '0 auto 30px'
      }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px'
        }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Our Mission</h3>
          <p style={{ color: '#666', margin: 0 }}>To deliver innovative solutions that exceed expectations</p>
        </div>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px'
        }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Our Vision</h3>
          <p style={{ color: '#666', margin: 0 }}>To be the leading provider in our industry</p>
        </div>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px'
        }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>Our Values</h3>
          <p style={{ color: '#666', margin: 0 }}>Integrity, Excellence, and Customer Focus</p>
        </div>
      </div>
    </div>
  );
}

export default About;

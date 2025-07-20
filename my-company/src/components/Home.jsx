function Home() {
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
        Welcome to Our Company
      </h1>
      <p style={{ 
        fontSize: '1.2em',
        color: '#666',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        We are dedicated to delivering excellence in all our services. Our team of experts is committed to providing innovative solutions that drive success for our clients.
      </p>
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px'
      }}>
        <h3 style={{ color: '#333', marginBottom: '10px' }}>Why Choose Us?</h3>
        <p style={{ color: '#666', margin: 0 }}>Quality, Innovation, and Customer Satisfaction</p>
      </div>
    </div>
  );
}

export default Home;

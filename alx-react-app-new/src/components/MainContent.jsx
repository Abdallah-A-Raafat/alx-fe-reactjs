function MainContent() {
  return (
    <main style={{ 
      padding: '20px', 
      backgroundColor: '#f0f8ff', 
      minHeight: '400px',
      margin: '10px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#2c3e50', 
        fontSize: '28px', 
        textAlign: 'center',
        marginBottom: '20px',
        textDecoration: 'underline'
      }}>
        Welcome to My Website
      </h2>
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.6', 
        color: '#34495e',
        textAlign: 'justify',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        This is the main content area where you can showcase your favorite cities, 
        travel experiences, and share interesting stories about different places around the world.
      </p>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        color: '#e74c3c',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '20px auto',
        fontWeight: 'bold'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        <button style={{
          backgroundColor: '#3498db',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>
          Explore Cities
        </button>
      </div>
    </main>
  );
}

export default MainContent;

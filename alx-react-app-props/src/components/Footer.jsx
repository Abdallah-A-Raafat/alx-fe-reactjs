function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '20px',
      borderTop: '3px solid #3498db'
    }}>
      <p style={{
        margin: '0',
        fontSize: '14px',
        fontWeight: '300'
      }}>
        © 2024 My Favorite Cities. All rights reserved.
      </p>
      <div style={{
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px'
      }}>
        <a href="#" style={{
          color: '#3498db',
          textDecoration: 'none',
          fontSize: '12px',
          padding: '5px 10px',
          border: '1px solid #3498db',
          borderRadius: '3px',
          transition: 'all 0.3s'
        }}>
          About
        </a>
        <a href="#" style={{
          color: '#3498db',
          textDecoration: 'none',
          fontSize: '12px',
          padding: '5px 10px',
          border: '1px solid #3498db',
          borderRadius: '3px',
          transition: 'all 0.3s'
        }}>
          Contact
        </a>
        <a href="#" style={{
          color: '#3498db',
          textDecoration: 'none',
          fontSize: '12px',
          padding: '5px 10px',
          border: '1px solid #3498db',
          borderRadius: '3px',
          transition: 'all 0.3s'
        }}>
          Privacy
        </a>
      </div>
    </footer>
  );
}

export default Footer;

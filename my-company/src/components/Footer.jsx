function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
    position: 'relative',
    bottom: 0,
    width: '100%'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Our Company. All rights reserved.</p>
      <p>Dedicated to delivering excellence in all our services.</p>
    </footer>
  );
}

export default Footer;

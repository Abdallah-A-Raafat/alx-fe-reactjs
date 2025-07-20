import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem',
    marginBottom: '20px'
  };

  const listStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const linkHoverStyle = {
    color: '#ddd'
  };

  return (
    <nav style={navStyle}>
      <ul style={listStyle}>
        <li>
          <Link 
            to="/" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/services" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = linkStyle.color}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

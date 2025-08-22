import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  };

  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <nav style={{ 
      padding: '1.5rem 2rem', 
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      marginBottom: '2rem',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ 
        display: 'flex', 
        gap: '2rem', 
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link to="/posts" style={{ fontSize: '1.1rem', fontWeight: '600' }}>Posts</Link>
        <Link to="/todos" style={{ fontSize: '1.1rem', fontWeight: '600' }}>Todo List</Link>
        <Link to="/register" style={{ fontSize: '1.1rem', fontWeight: '600' }}>Register</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" style={{ fontSize: '1.1rem', fontWeight: '600' }}>Profile</Link>
            <button 
              onClick={handleLogout} 
              style={{ 
                marginLeft: 'auto',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                fontSize: '0.9rem'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ marginLeft: 'auto', fontSize: '1.1rem', fontWeight: '600' }}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

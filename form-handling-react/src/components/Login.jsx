import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    navigate('/profile');
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '0 1rem' }} className="fade-in-up">
      <div className="card">
        <h2 style={{ 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '2rem'
        }}>
          🔐 Login
        </h2>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            Click the button below to simulate authentication and access protected routes.
          </p>
        </div>
        <button 
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #10b981, #059669)'
          }}
        >
          🚀 Login (Simulate Auth)
        </button>
      </div>
    </div>
  );
};

export default Login;

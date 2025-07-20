import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  // Consume the UserContext using useContext hook
  const userData = useContext(UserContext);

  return (
    <div style={{ 
      backgroundColor: '#ecf0f1', 
      padding: '15px', 
      borderRadius: '5px',
      border: '1px solid #bdc3c7'
    }}>
      <h3 style={{ 
        color: '#2c3e50', 
        fontSize: '18px', 
        marginBottom: '10px',
        textDecoration: 'underline'
      }}>
        User Details
      </h3>
      <p style={{ 
        fontSize: '16px', 
        margin: '8px 0', 
        color: '#34495e' 
      }}>
        <strong style={{ color: '#e74c3c' }}>Name:</strong> {userData.name}
      </p>
      <p style={{ 
        fontSize: '16px', 
        margin: '8px 0', 
        color: '#34495e' 
      }}>
        <strong style={{ color: '#e74c3c' }}>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;

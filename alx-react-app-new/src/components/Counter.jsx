import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px', 
      border: '2px solid #3498db', 
      borderRadius: '10px', 
      margin: '20px auto', 
      maxWidth: '400px',
      backgroundColor: '#ecf0f1'
    }}>
      <h3 style={{ 
        color: '#2c3e50', 
        fontSize: '24px', 
        marginBottom: '20px' 
      }}>
        Counter Application
      </h3>
      <p style={{ 
        fontSize: '32px', 
        fontWeight: 'bold', 
        color: '#e74c3c', 
        margin: '20px 0',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        Current Count: {count}
      </p>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2ecc71'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            backgroundColor: '#95a5a6',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#7f8c8d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#95a5a6'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      padding: '15px', 
      borderRadius: '6px',
      border: '1px solid #e1e8ed'
    }}>
      <h2 style={{ 
        color: '#34495e', 
        fontSize: '22px', 
        marginBottom: '15px',
        borderBottom: '2px solid #3498db',
        paddingBottom: '8px'
      }}>
        User Information
      </h2>
      <UserDetails />
    </div>
  );
}

export default UserInfo;

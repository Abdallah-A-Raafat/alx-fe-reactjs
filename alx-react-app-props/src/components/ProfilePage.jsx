import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '8px', 
      margin: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#2c3e50', 
        textAlign: 'center', 
        marginBottom: '20px',
        fontSize: '28px'
      }}>
        User Profile Page
      </h1>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;

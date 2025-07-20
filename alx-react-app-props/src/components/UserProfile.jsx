import React, { useContext } from 'react';
import UserContext from './UserContext';
import UserInfo from './UserInfo';

function UserProfile() {
  // Access the context to demonstrate usage
  const userData = useContext(UserContext);
  
  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome, {userData.name}!</p>
      <UserInfo />
    </div>
  );
}

export default UserProfile;

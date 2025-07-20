function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px', margin: '5px 0' }}>Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span></p>
      <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

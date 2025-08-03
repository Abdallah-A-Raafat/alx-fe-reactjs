const SearchResults = ({ users, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="search-results">
        <div className="loading">
          <p>Searching for users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="search-results">
        <div className="error">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="search-results">
        <div className="no-results">
          <p>No users found. Try a different search term.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2>Search Results ({users.length} users found)</h2>
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img 
              src={user.avatar_url} 
              alt={`${user.login}'s avatar`}
              className="user-avatar-small"
            />
            <div className="user-info-small">
              <h4>{user.login}</h4>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="user-link"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

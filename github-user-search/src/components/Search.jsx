import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setUserData(null);
    
    try {
      const data = await fetchUserData(username.trim());
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username..."
            className="search-input"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={isLoading || !username.trim()}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {/* Conditional Rendering for API States */}
      {isLoading && (
        <div className="loading-message">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>Looks like we cant find the user</p>
        </div>
      )}

      {userData && !isLoading && !error && (
        <div className="user-result">
          <div className="user-avatar">
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          </div>
          <div className="user-info">
            <h3>{userData.name || userData.login}</h3>
            <p className="username">@{userData.login}</p>
            {userData.bio && <p className="bio">{userData.bio}</p>}
            <div className="user-stats">
              <span>Followers: {userData.followers}</span>
              <span>Following: {userData.following}</span>
              <span>Repos: {userData.public_repos}</span>
            </div>
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-profile-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

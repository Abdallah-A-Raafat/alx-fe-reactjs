import { useState } from 'react';
import './App.css';
import { Search, SearchResults } from './components';
import { searchUsers } from './services/githubApi';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (username) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const data = await searchUsers(username);
      setUsers(data.items || []);
    } catch (err) {
      setError(err.message);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Search for GitHub users and explore their profiles</p>
      </header>
      
      <main className="app-main">
        <Search onSearch={handleSearch} />
        
        {hasSearched && (
          <SearchResults 
            users={users}
            isLoading={isLoading}
            error={error}
          />
        )}
      </main>
    </div>
  );
}

export default App;

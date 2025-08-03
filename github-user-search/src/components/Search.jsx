import { useState } from 'react';
import { fetchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setUsers([]);
    setTotalCount(0);
    setPage(1);
    try {
      const data = await fetchUsers({ username, location, minRepos, page: 1 });
      setUsers(data.items || []);
      setTotalCount(data.total_count || 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = async (newPage) => {
    setIsLoading(true);
    setError(null);
    setUsers([]);
    setPage(newPage);
    try {
      const data = await fetchUsers({ username, location, minRepos, page: newPage });
      setUsers(data.items || []);
      setTotalCount(data.total_count || 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="GitHub username"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (optional)"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <div className="w-32">
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Repos</label>
          <input
            type="number"
            min="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="0"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          disabled={isLoading || (!username && !location && !minRepos)}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Results Section */}
      <div className="mt-6">
        {isLoading && (
          <div className="text-center text-blue-600 font-medium">Loading...</div>
        )}
        {error && (
          <div className="text-center text-red-600 font-medium">{error}</div>
        )}
        {!isLoading && !error && users.length === 0 && totalCount === 0 && (
          <div className="text-center text-gray-500">No users found. Try a different search.</div>
        )}
        {!isLoading && users.length > 0 && (
          <div>
            <div className="mb-2 text-gray-700 font-semibold">{totalCount} users found</div>
            <ul className="divide-y divide-gray-200">
              {users.map((user) => (
                <li key={user.id} className="flex items-center gap-4 py-4">
                  <img src={user.avatar_url} alt={user.login} className="w-14 h-14 rounded-full border" />
                  <div className="flex-1">
                    <div className="font-bold text-lg text-gray-800">{user.login}</div>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1 || isLoading}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-700">Page {page}</span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page * 10 >= totalCount || isLoading}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

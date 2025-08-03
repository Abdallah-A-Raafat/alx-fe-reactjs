import { useState } from 'react';
import { fetchUsers, fetchUserData, fetchUserRepos } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [loadingDetails, setLoadingDetails] = useState(false);

  // Advanced search with multiple API endpoints
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setUsers([]);
    setTotalCount(0);
    setPage(1);
    setSelectedUser(null);
    setUserDetails(null);
    setUserRepos([]);
    
    try {
      // If only username is provided, try both search and direct user lookup
      if (username && !location && !minRepos) {
        try {
          // First, try direct user lookup with fetchUserData
          const directUser = await fetchUserData(username);
          if (directUser) {
            setUsers([directUser]);
            setTotalCount(1);
            setIsLoading(false);
            return;
          }
        } catch {
          // If direct lookup fails, fall back to search
          // Silently continue to search API fallback
        }
      }
      
      // Use advanced search API
      const data = await fetchUsers({ username, location, minRepos, page: 1 });
      setUsers(data.items || []);
      setTotalCount(data.total_count || 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Load detailed user information and repositories
  const handleUserSelect = async (user) => {
    setSelectedUser(user);
    setLoadingDetails(true);
    setUserDetails(null);
    setUserRepos([]);
    
    try {
      // Fetch detailed user data if not already complete
      let detailedUser = user;
      if (!user.bio || !user.blog) {
        detailedUser = await fetchUserData(user.login);
      }
      setUserDetails(detailedUser);
      
      // Fetch user repositories
      const repos = await fetchUserRepos(user.login);
      setUserRepos(repos);
    } catch {
      // Silently handle user details fetch errors
      // The basic user information is still available
    } finally {
      setLoadingDetails(false);
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
            <div className="mb-4 text-gray-700 font-semibold text-lg">{totalCount.toLocaleString()} users found</div>
            <div className="space-y-4">
              {users.map((user) => (
                <div 
                  key={user.id} 
                  className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleUserSelect(user)}
                >
                  <img 
                    src={user.avatar_url} 
                    alt={user.login} 
                    className="w-16 h-16 rounded-full border-2 border-gray-200" 
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 truncate">{user.login}</h3>
                        {user.name && (
                          <p className="text-gray-600 font-medium">{user.name}</p>
                        )}
                        {user.bio && (
                          <p className="text-gray-700 mt-1 text-sm line-clamp-2">{user.bio}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-end text-right ml-4">
                        <span className="text-sm text-gray-500">Score: {user.score?.toFixed(1)}</span>
                        {user.type && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-1">
                            {user.type}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                      {user.location && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {user.location}
                        </span>
                      )}
                      {user.public_repos !== undefined && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                          {user.public_repos} repos
                        </span>
                      )}
                      {user.followers !== undefined && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          {user.followers} followers
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2 mt-3">
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-gray-900 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        View Profile
                      </a>
                      {user.blog && (
                        <a
                          href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          Website
                        </a>
                      )}
                      <button
                        className="inline-flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUserSelect(user);
                        }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1 || isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">
                  Page {page} of {Math.ceil(totalCount / 10)}
                </span>
                <span className="text-gray-500 text-sm">
                  ({((page - 1) * 10) + 1}-{Math.min(page * 10, totalCount)} of {totalCount.toLocaleString()})
                </span>
              </div>
              
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page * 10 >= totalCount || isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
        
        {/* Detailed User Information Modal/Section */}
        {selectedUser && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">User Details</h2>
              <button
                onClick={() => {
                  setSelectedUser(null);
                  setUserDetails(null);
                  setUserRepos([]);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {loadingDetails ? (
              <div className="text-center py-8">
                <div className="text-blue-600 font-medium">Loading user details...</div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Enhanced User Details */}
                {userDetails && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start gap-6">
                      <img 
                        src={userDetails.avatar_url} 
                        alt={userDetails.login}
                        className="w-24 h-24 rounded-full border-4 border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">{userDetails.name || userDetails.login}</h3>
                        <p className="text-gray-600 text-lg">@{userDetails.login}</p>
                        {userDetails.bio && (
                          <p className="text-gray-700 mt-2">{userDetails.bio}</p>
                        )}
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{userDetails.public_repos}</div>
                            <div className="text-sm text-gray-500">Repositories</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{userDetails.followers}</div>
                            <div className="text-sm text-gray-500">Followers</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">{userDetails.following}</div>
                            <div className="text-sm text-gray-500">Following</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600">{userDetails.public_gists}</div>
                            <div className="text-sm text-gray-500">Gists</div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                          {userDetails.location && (
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {userDetails.location}
                            </span>
                          )}
                          {userDetails.company && (
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd" />
                              </svg>
                              {userDetails.company}
                            </span>
                          )}
                          {userDetails.created_at && (
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                              Joined {new Date(userDetails.created_at).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* User Repositories */}
                {userRepos.length > 0 && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Recent Repositories</h4>
                    <div className="space-y-3">
                      {userRepos.slice(0, 5).map((repo) => (
                        <div key={repo.id} className="p-3 border border-gray-200 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h5 className="font-semibold text-blue-600">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                  {repo.name}
                                </a>
                              </h5>
                              {repo.description && (
                                <p className="text-gray-600 text-sm mt-1">{repo.description}</p>
                              )}
                              <div className="flex gap-4 mt-2 text-xs text-gray-500">
                                {repo.language && (
                                  <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    {repo.language}
                                  </span>
                                )}
                                <span className="flex items-center gap-1">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  {repo.stargazers_count}
                                </span>
                                <span className="flex items-center gap-1">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  {repo.forks_count}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

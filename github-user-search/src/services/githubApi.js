// Service for GitHub API calls
// Usage of API key: import.meta.env.VITE_APP_GITHUB_API_KEY
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (username) => {
  const headers = {};
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  if (apiKey) headers['Authorization'] = `token ${apiKey}`;
  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q: username },
    headers,
  });
  return response.data;
};

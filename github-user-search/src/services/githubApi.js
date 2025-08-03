// Service for GitHub API calls
// Usage of API key: import.meta.env.VITE_APP_GITHUB_API_KEY
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Create axios instance with default configuration
const githubAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Add request interceptor to include auth token if available
githubAPI.interceptors.request.use((config) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  if (apiKey) {
    config.headers['Authorization'] = `token ${apiKey}`;
  }
  return config;
});

// Search for users
export const searchUsers = async (username) => {
  try {
    const response = await githubAPI.get('/search/users', {
      params: { 
        q: username,
        per_page: 10 // Limit results for better performance
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to search users: ${error.response?.data?.message || error.message}`);
  }
};

// Get detailed user information
export const getUser = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch user: ${error.response?.data?.message || error.message}`);
  }
};

// Get user repositories
export const getUserRepos = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}/repos`, {
      params: {
        sort: 'updated',
        per_page: 10
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch repositories: ${error.response?.data?.message || error.message}`);
  }
};

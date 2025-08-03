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

// Fetch user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    }
    throw new Error(`Failed to fetch user data: ${error.response?.data?.message || error.message}`);
  }
};

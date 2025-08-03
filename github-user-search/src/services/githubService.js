/**
 * GitHub API Service
 * 
 * This service provides integration with GitHub's REST API v3
 * Main endpoints used:
 * - https://api.github.com/search/users?q={query} - Advanced user search
 * - https://api.github.com/users/{username} - Individual user details
 * - https://api.github.com/users/{username}/repos - User repositories
 * 
 * API Documentation: https://docs.github.com/en/rest
 */
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

// Advanced user search using GitHub Search API
// Example API endpoint: https://api.github.com/search/users?q={query}
export const fetchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = '';
    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;
    query = query.trim();

    if (!query) {
      throw new Error('Please provide at least one search criterion');
    }

    // GitHub Search API parameters
    const params = {
      q: query,
      per_page: 10,
      page,
      sort: 'best-match',
      order: 'desc'
    };

    // Make request to https://api.github.com/search/users?q={query}
    const response = await githubAPI.get('/search/users', { params });
    
    // Fetch additional details for each user to get more complete information
    const usersWithDetails = await Promise.all(
      response.data.items.map(async (user) => {
        try {
          const detailResponse = await githubAPI.get(`/users/${user.login}`);
          return {
            ...user,
            ...detailResponse.data,
            // Preserve search-specific fields
            score: user.score,
            id: user.id
          };
        } catch {
          // If detailed fetch fails, return basic user info
          // Silently handle the error for production
          return user;
        }
      })
    );

    return {
      ...response.data,
      items: usersWithDetails
    };
  } catch (error) {
    throw new Error(`Failed to search users: ${error.response?.data?.message || error.message}`);
  }
};

// Search repositories for a specific user
// API endpoint: https://api.github.com/users/{username}/repos
export const fetchUserRepos = async (username, page = 1) => {
  try {
    const params = {
      sort: 'updated',
      per_page: 10,
      page
    };
    
    const response = await githubAPI.get(`/users/${username}/repos`, { params });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch repositories: ${error.response?.data?.message || error.message}`);
  }
};

// Search for users by advanced criteria using GitHub Search API
// API endpoint: https://api.github.com/search/users?q={advanced_query}
export const searchUsersByQuery = async (searchQuery, page = 1) => {
  try {
    const params = {
      q: searchQuery,
      per_page: 10,
      page,
      sort: 'followers',
      order: 'desc'
    };

    const response = await githubAPI.get('/search/users', { params });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to search users by query: ${error.response?.data?.message || error.message}`);
  }
};

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Simulate authentication (replace with real auth logic)
const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

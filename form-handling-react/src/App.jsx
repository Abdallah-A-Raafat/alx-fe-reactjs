import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './components/PostsComponent';
import FormikForm from './components/formikForm';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import PostDetails from './components/PostDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import TodoList from './components/TodoList';
import Navigation from './components/Navigation';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<PostsComponent />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/register" element={<FormikForm />} />
          <Route path="/login" element={<Login />} />
          {/* Protected profile route with nested routes */}
          <Route path="/profile" element={<ProtectedRoute />}>
            <Route element={<Profile />}>
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
              <Route index element={<ProfileDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

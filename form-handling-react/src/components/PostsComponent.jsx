import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000, // 1 minute
    cacheTime: 300000, // 5 minutes
  });

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }} className="fade-in-up">
      <div className="card">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Latest Posts
        </h2>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button 
            onClick={() => refetch()} 
            disabled={isFetching}
            style={{
              background: isFetching 
                ? 'linear-gradient(135deg, #9ca3af, #6b7280)' 
                : 'linear-gradient(135deg, #06b6d4, #0891b2)'
            }}
          >
            {isFetching ? 'Refreshing...' : '🔄 Refresh Posts'}
          </button>
        </div>
        {isLoading && (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              border: '4px solid #e5e7eb',
              borderTop: '4px solid #4f46e5',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto'
            }}></div>
            <p style={{ marginTop: '1rem', color: '#6b7280' }}>Loading amazing posts...</p>
          </div>
        )}
        {isError && (
          <div style={{ 
            color: '#ef4444', 
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(239, 68, 68, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            <p>❌ Error: {error.message}</p>
          </div>
        )}
        {posts && (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {posts.slice(0, 10).map((post) => (
              <div 
                key={post.id} 
                style={{ 
                  padding: '1.5rem', 
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
                }}
              >
                <h3 style={{ 
                  margin: '0 0 1rem 0', 
                  color: '#1e293b',
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}>
                  {post.title}
                </h3>
                <p style={{ 
                  margin: 0, 
                  color: '#64748b',
                  lineHeight: '1.6'
                }}>
                  {post.body}
                </p>
                <div style={{ 
                  marginTop: '1rem', 
                  fontSize: '0.875rem', 
                  color: '#94a3b8',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>Post #{post.id}</span>
                  <span>👤 User {post.userId}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsComponent;

import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { postId } = useParams();
  // In a real app, fetch post details by postId
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h2>Post Details</h2>
      <p>Post ID: {postId}</p>
      <p>Here you would fetch and display the post details for this ID.</p>
    </div>
  );
};

export default PostDetails;

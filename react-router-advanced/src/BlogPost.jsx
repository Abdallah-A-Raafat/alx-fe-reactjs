import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Post: {id}</h2>
      <p>This is a dynamic blog post page for post ID: {id}.</p>
    </div>
  );
}

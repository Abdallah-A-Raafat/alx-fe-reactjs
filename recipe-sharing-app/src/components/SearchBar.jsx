import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore(state => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm
  }));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div style={{ marginBottom: '20px', position: 'relative', maxWidth: '400px' }}>
      <input
        type="text"
        placeholder="Search recipes by title or description..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          width: '100%',
          padding: '12px 40px 12px 16px',
          border: '2px solid #ddd',
          borderRadius: '8px',
          fontSize: '16px',
          outline: 'none',
          transition: 'border-color 0.3s ease'
        }}
        onFocus={(e) => e.target.style.borderColor = '#007bff'}
        onBlur={(e) => e.target.style.borderColor = '#ddd'}
      />
      {searchTerm && (
        <button
          onClick={clearSearch}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: '#666',
            padding: '4px'
          }}
          title="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;

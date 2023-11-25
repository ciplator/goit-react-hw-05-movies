
import React, { useState } from 'react';

export const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
        aria-label="Search movies"
      />
      <button type="submit" disabled={!query} aria-label="Submit search">
        Search
      </button>
    </form>
  );
};


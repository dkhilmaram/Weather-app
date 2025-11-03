import React, { useState } from "react";
import '../Styles/SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a city name 🏙️");
      return;
    }
    setError('');
    console.log(`Searching for city: ${query}`);
    if (onSearch) onSearch(query);
  };

  return (
    <form className="search" onSubmit={handleSearch} role="search">
      <input
        type="text"
        className="input"
        placeholder="Rechercher une ville…"
        aria-label="Rechercher une ville"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn" type="submit">Rechercher</button>
      {error && <span className="error">{error}</span>}
    </form>
  );
}

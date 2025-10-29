import React from "react";
import '../Styles/SearchBar.css';


export default function SearchBar() {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={submit} role="search">
      <input
        type="text"
        className="input"
        placeholder="Rechercher une ville…"
        aria-label="Rechercher une ville"
      />
      <button className="btn" type="submit">Rechercher</button>
    </form>
  );
}

import React from 'react';
import '../Styles/Header.css';


export default function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="site-title">weather app</h1>
        <p className="site-date">{new Date().toLocaleDateString()}</p>
      </div>
      <div className="header__right">
        <button className="btn" onClick={toggleTheme} aria-label="changement de mode">
          {theme === "light" ? "🌞 jour" : "🌙 nuit"}
        </button>
      </div>
    </header>
  );
}
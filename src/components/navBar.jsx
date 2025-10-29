import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';



export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
         <li>
          <Link to="/authentifier">S'authentifier</Link>
        </li>
      </ul>
    </nav>
  );
}

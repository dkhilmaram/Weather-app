import { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import About from "./pages/about";
import Auth from "./pages/Auth";
import SearchBar from "./components/SearchBar"; // 👈 Add this import

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="app">
        <Header toggleTheme={toggleTheme} theme={theme} />

        {/* 🧭 Weather search bar always visible above navbar */}
        <div className="weather-search-bar">
          <SearchBar />
        </div>

        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/about" element={<About />} />
            <Route path="/authentifier" element={<Auth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

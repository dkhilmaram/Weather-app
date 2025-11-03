import React, { useState } from 'react';
import '../Styles/Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required ⚠️";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email format 📧";

    if (!username.trim()) newErrors.username = "Username required ✏️";
    else if (username.length < 3)
      newErrors.username = "Username must be at least 3 characters";

    if (!password) newErrors.password = "Password required 🔒";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('✅ Email:', email);
      console.log('✅ Username:', username);
      console.log('✅ Password:', password);
      alert("Form submitted successfully!");
      setEmail('');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className="auth-title">Welcome </h1>
        <p className="auth-subtitle">Please sign up or log in below</p>

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <span className="error">{errors.username}</span>}

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type="submit" className="auth-btn">Submit</button>
      </form>
    </div>
  );
}

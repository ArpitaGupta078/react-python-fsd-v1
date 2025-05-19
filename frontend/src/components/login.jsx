import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../services/api'; // Adjust the path if needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  console.log(email);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const result = await login(email, password);
      alert(`Logged in successfully: ${result.message}`);
      // Optionally store token or user data
      // localStorage.setItem('token', result.data.token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-fluid login-background min-vh-100 d-flex justify-content-center align-items-center">
      <div className="login-card p-4 shadow rounded-4 w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center login-title mb-4">Welcome Back! 🐻</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control custom-input mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control custom-input mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn custom-btn w-100">
            Log In 💖
          </button>
        </form>
        <p className="text-center mt-3 login-footer">
          Don’t have an account? <a href="/sign-up">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Signup = () => {
  return (
    <div className="container-fluid signup-background min-vh-100 d-flex align-items-center justify-content-center">
  <div className="signup-card p-4 shadow rounded-4 w-100" style={{ maxWidth: '400px' }}>
    <h2 className="text-center mb-4 welcome-text">Create Account 🐣</h2>
    <form>
      <div className="mb-3">
        <input type="text" className="form-control input-box" placeholder="Name" />
      </div>
      <div className="mb-3">
        <input type="email" className="form-control input-box" placeholder="Email" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control input-box" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary w-100 login-button">Sign Up 🌟</button>
    </form>
    <p className="text-center mt-3">
      Already have an account? <a href="/log-in" className="text-pink">Log in</a>
    </p>
  </div>
</div>
  );
};

export default Signup;
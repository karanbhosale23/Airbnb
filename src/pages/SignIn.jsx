import React, { useState } from 'react';
import"./SignIn.css"
const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    // Add logic to handle form submission
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="signInUsername" className="form-label">Username</label>
            <input
              type="text"
              className="form-control form-control-sm" // Small input size
              id="signInUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signInEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control form-control-sm" // Small input size
              id="signInEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signInPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control form-control-sm" // Small input size
              id="signInPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-sm">SignIn</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

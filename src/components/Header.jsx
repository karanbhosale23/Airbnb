// src/components/Header.jsx
import "./Header.css"
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';  // Import Dropdown component from React-Bootstrap
import { FaUserCircle } from 'react-icons/fa'; // Import an icon for Profile

const Header = () => {
  return (
    <header className="  --bs-primary-bg-subtle text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div>

                    <Link to="/" className="text-black text-decoration-none h4 ">
            Home
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow-1 mx-4">
          <form className="d-flex">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search hotels..."
              aria-label="Search"
            />
            <button className="btn btn-light ms-2 rounded-pill" type="submit">
              <strong>Search</strong>
            </button>
          </form>
        </div>

        {/* Navigation Links */}
        <nav className="d-flex align-items-center">

          <Link to="/add-hotel" className="text-black me-3 btn btn-outline-light rounded-pill px-4">
            Add Hotel
          </Link>

          {/* User Dropdown Button for SignIn/Login */}
          <Dropdown className="me-3">
            <Dropdown.Toggle variant="light" id="signin-login-dropdown" className="btn btn-primary rounded-pill">
              <strong>SignIn / Login</strong>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/login">
                Login
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/signin">
                SignIn
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Profile Button - Using User Avatar Image */}
          <Link to="/profile" className="d-flex align-items-center">
            <img
              src="https://pic.onlinewebfonts.com/thumbnails/icons_542942.svg" // Replace with user's profile image URL
              alt="Profile"
              className="rounded-circle border border-2 border-light"
              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

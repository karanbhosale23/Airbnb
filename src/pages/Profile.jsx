// src/components/Profile.jsx
import React, { useState } from 'react';
import './Profile.css'; // Ensure this file exists and is correctly imported
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons for show/hide password

const Profile = () => {
    const [username, setUsername] = useState('JohnDoe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('1234');
    const [isEditing, setIsEditing] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        console.log('Profile updated:', { username, email, password });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); // Toggle the visibility state
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                {/* Profile logo */}
                <div className="profile-logo">
                    <img src="https://pic.onlinewebfonts.com/thumbnails/icons_542942.svg" alt="Profile Logo" />
                </div>
                <div className="profile-info">
                    <table className="profile-table">
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="username"
                                            value={username}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <span>{username}</span>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <span>{email}</span>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>
                                    <div className="password-field">
                                        {isEditing ? (
                                            <input
                                                type={passwordVisible ? 'text' : 'password'}
                                                name="password"
                                                value={password}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <span>{password}</span>
                                        )}
                                        <button onClick={togglePasswordVisibility} type="button">
                                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="profile-actions">
                    {isEditing ? (
                        <button onClick={handleSave}>Save Changes</button>
                    ) : (
                        <button onClick={handleEdit}>Edit Profile</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;

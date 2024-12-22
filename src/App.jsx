// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddHotel from './pages/AddHotel';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import ShowHotels from './components/ShowHotels';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/ShowHotels" element={<ShowHotels />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

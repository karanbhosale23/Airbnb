import React, { useState } from 'react';

const AddHotel = () => {
  const [hotelName, setHotelName] = useState('');
  const [hotelImage, setHotelImage] = useState('');
  const [hotelLocation, setHotelLocation] = useState('');
  const [hotelRent, setHotelRent] = useState('');
  const [hotelDescription, setHotelDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHotel = {
      hotelName,
      hotelImage,
      hotelLocation,
      hotelRent,
      hotelDescription,
    };
    console.log(newHotel);
    // Add logic to handle form submission (e.g., save to a database)
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Add Hotel</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="hotelName" className="form-label">Hotel Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="hotelName"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              placeholder="Enter hotel name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hotelImage" className="form-label">Hotel Image URL</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="hotelImage"
              value={hotelImage}
              onChange={(e) => setHotelImage(e.target.value)}
              placeholder="Enter image URL"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hotelLocation" className="form-label">Hotel Location</label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="hotelLocation"
              value={hotelLocation}
              onChange={(e) => setHotelLocation(e.target.value)}
              placeholder="Enter hotel location"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hotelRent" className="form-label">Rent per Day</label>
            <input
              type="number"
              className="form-control form-control-sm"
              id="hotelRent"
              value={hotelRent}
              onChange={(e) => setHotelRent(e.target.value)}
              placeholder="Enter rent per day"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hotelDescription" className="form-label">Hotel Description</label>
            <textarea
              className="form-control form-control-sm"
              id="hotelDescription"
              value={hotelDescription}
              onChange={(e) => setHotelDescription(e.target.value)}
              placeholder="Enter hotel description"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-sm">Add Hotel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;

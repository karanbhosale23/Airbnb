// src/components/HotelBooking.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
// import "./HotelBooking.css"

const HotelBooking = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking Details:', { checkInDate, checkOutDate, guests });
  };

  return (
    <div className="hotel-booking">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Check-In Date</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={new Date()}
            placeholderText="Select check-in date"
            className="form-control"
          />
        </div>
        <br />
        <div className="form-group">
          <label>Check-Out Date</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate}
            placeholderText="Select check-out date"
            className="form-control"
          />
        </div>
        <br />
        <div className="form-group">
          <label>Number of Guests</label>
          <Select
            value={{ label: `${guests} Guest${guests > 1 ? 's' : ''}`, value: guests }}
            onChange={(selectedOption) => setGuests(selectedOption.value)}
            options={[
              { label: '1 Guest', value: 1 },
              { label: '2 Guests', value: 2 },
              { label: '3 Guests', value: 3 },
              { label: '4 Guests', value: 4 },
              { label: '5 Guests', value: 5 },
            ]}
            className="form-control"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default HotelBooking;

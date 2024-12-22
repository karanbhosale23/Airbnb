// src/components/ShowHotels.jsx
import React, { useState } from 'react';
import HotelCard from './HotelCard';
import CommentCard from '../pages/CommentCard'; // Ensure it's imported correctly
import HotelBooking from './HotelBooking';

const ShowHotels = () => {
  const hotels = [
    {
      name: 'Hotel Paradise',
      location: 'New York, USA',
      description: 'A luxurious hotel offering world-class amenities.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSas2VX8WT7hTU5B7cZKsKrxqF5G-aXAxiQ&s',
    },
    // Add more hotels as needed
  ];

  // State for holding comments
  const [comments, setComments] = useState({});

  // Handle adding a comment
  const handleAddComment = (hotelName, commentText) => {
    setComments((prevComments) => ({
      ...prevComments,
      [hotelName]: [...(prevComments[hotelName] || []), commentText],
    }));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {hotels.map((hotel, index) => (
          <div className="col-md-10 mb-2" key={index}>
            <div className="d-flex">
              {/* Hotel Card on the Left */}
              <div className="hotel-card">
                <HotelCard hotel={hotel} />
                                <CommentCard
                  hotelName={hotel.name}
                  comments={comments[hotel.name] || []}
                  onAddComment={handleAddComment}
                />
                
              </div>

              {/* Comment Section on the Right */}
              <div className="comment-section ms-4">
                <HotelBooking/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowHotels;





import React, { useState } from 'react';
import './CardGrid.css';

const CardGrid = () => {
  const hotels = [
      {
      name: 'Hotel Paradise',
      location: 'New York, USA',
      description: 'A luxurious hotel offering world-class amenities.',
      rentPerDay: '$200',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSas2VX8WT7hTU5B7cZKsKrxqF5G-aXAxiQ&s', // Replace with actual image URL
    },
    {
      name: 'Sea View Resort',
      location: 'Malibu, USA',
      description: 'Enjoy a stunning ocean view with top-notch services.',
      rentPerDay: '$150',
      image: 'https://cache.marriott.com/is/image/marriotts7prod/wi-pnqwi-asilo-pune-34202:Classic-Hor?output-quality=70&interpolation=progressive-bilinear&downsize=600px:*',
    },
    {
      name: 'Mountain Retreat',
      location: 'Denver, USA',
      description: 'A serene getaway in the heart of the mountains.',
      rentPerDay: '$180',
      image: 'https://im.whatshot.in/img/2019/Nov/the-o-hotel-1574330409.jpg',
    },
    {
      name: 'Urban Stay',
      location: 'Chicago, USA',
      description: 'A modern hotel in the bustling city center.',
      rentPerDay: '$220',
      image: 'https://images.trvl-media.com/lodging/4000000/3010000/3003800/3003784/005ae92d.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    },
      {
      name: 'Hotel Paradise',
      location: 'New York, USA',
      description: 'A luxurious hotel offering world-class amenities.',
      rentPerDay: '$200',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwSas2VX8WT7hTU5B7cZKsKrxqF5G-aXAxiQ&s', // Replace with actual image URL
    },
    {
      name: 'Sea View Resort',
      location: 'Malibu, USA',
      description: 'Enjoy a stunning ocean view with top-notch services.',
      rentPerDay: '$150',
      image: 'https://cache.marriott.com/is/image/marriotts7prod/wi-pnqwi-asilo-pune-34202:Classic-Hor?output-quality=70&interpolation=progressive-bilinear&downsize=600px:*',
    },
    {
      name: 'Mountain Retreat',
      location: 'Denver, USA',
      description: 'A serene getaway in the heart of the mountains.',
      rentPerDay: '$180',
      image: 'https://im.whatshot.in/img/2019/Nov/the-o-hotel-1574330409.jpg',
    },
    {
      name: 'Urban Stay',
      location: 'Chicago, USA',
      description: 'A modern hotel in the bustling city center.',
      rentPerDay: '$220',
      image: 'https://images.trvl-media.com/lodging/4000000/3010000/3003800/3003784/005ae92d.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    },
    // Your hotel data here
  ];

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="card-grid">
      {hotels.map((hotel, index) => (
        <div className="card" key={index}>
          <div className="card-image" onClick={() => openFullscreenImage(hotel.image)}>
            <img src={hotel.image} alt={hotel.name} />
          </div>
          <div className="card-content">
            <h5>{hotel.name}</h5>
            <p className="location">{hotel.location}</p>
            <p className="description">{hotel.description}</p>
            <p className="rent">{hotel.rentPerDay}/day</p>
            <a href="/ShowHotels" className="details-button">Show Details</a>
          </div>
        </div>
      ))}
      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={closeFullscreenImage}>
          <div className="fullscreen-image-container">
            <img src={fullscreenImage} alt="Fullscreen View" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGrid;

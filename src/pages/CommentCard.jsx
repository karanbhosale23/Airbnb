// src/components/CommentCard.jsx
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Profile icon for comment section
import ReactStars from 'react-rating-stars-component'; // Rating component

const CommentCard = () => {
  const [comment, setComment] = useState(''); // Holds the comment input
  const [comments, setComments] = useState([
    { user: 'Jane Doe', text: 'Exceptional service, stunning city viewsGreat hotel!', rating: 4 }, // Initial comment with rating
  ]); // Holds the list of comments
  const [commenting, setCommenting] = useState(false); // To manage the UI state for the comment submission
  const [rating, setRating] = useState(0); // Holds the rating value

  // Handle comment input change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle comment submit
  const handleCommentSubmit = () => {
    if (comment.trim() && rating > 0) {
      setCommenting(true);
      setTimeout(() => {
        setComments([{ user: 'John Doe', text: comment, rating }, ...comments]); // Adding the new comment
        setComment(''); // Clear the input field
        setRating(0); // Reset the rating
        setCommenting(false); // Stop the loading spinner
      }, 500); // Simulating an API delay
    }
  };

  return (
    <div className="comment-card">
      {/* Comment Input */}
      <div className="d-flex align-items-center justify-content-center">
        <FaUserCircle size={40} className="me-3" />
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className="form-control comment-input"
          placeholder="Add a comment..."
          rows="2"
        />
        <button
          className="btn btn-primary ms-2"
          onClick={handleCommentSubmit}
          disabled={commenting || !comment.trim() || rating === 0}
        >
          {commenting ? 'Posting...' : 'Post'}
        </button>
      </div>

      {/* Rating Input */}
      <div className="mt-2">
        <ReactStars
          count={5}
          value={rating}
          onChange={handleRatingChange}
          size={24}
          activeColor="#ffd700"
        />
      </div>

      {/* Comment List */}
      <div className="comments mt-3">
        {comments.map((comment, index) => (
          <div className="d-flex align-items-start mb-3" key={index}>
            <FaUserCircle size={40} className="me-3" />
            <div>
              <strong>{comment.user}</strong>
              <p className="mb-0">{comment.text}</p>
              <ReactStars
                count={5}
                value={comment.rating}
                size={20}
                edit={false}
                activeColor="#ffd700"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentCard;

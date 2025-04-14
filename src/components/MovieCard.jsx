import React from "react";
import "./MovieCard.css";

const MovieCard = () => {
  const movie = {
    poster: "https://m.media-amazon.com/images/I/81218n6JFgL.jpg",
    name: "Oppenheimer",
    releaseYear: "21 July 2023",
    rating: "8.6/10"
  };

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">🎬 {movie.name}</h2>
        <p><strong>Release Date:</strong> {movie.releaseYear}</p>
        <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;

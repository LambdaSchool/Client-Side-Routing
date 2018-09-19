import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const { id, title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
      </Link>
      <div>
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  )
}

export default MovieCard;


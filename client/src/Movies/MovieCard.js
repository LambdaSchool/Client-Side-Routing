import React from 'react';
// import { Link } from 'react-router-dom';

const MovieCard = props => {
  const movie = props.movie;
  const { title, director, metascore, stars } =movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        {/* <Link to='/movies/4'>Next Movie</Link> */}
        <div className="movie-director">
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
      {props.addToSavedList &&
      <div
        onClick={(event) => {
          event.preventDefault();
          props.addToSavedList(movie);
        }}
          className="save-button">Save</div>}
    </div>
  );
  return;
};

export default MovieCard;

  // const save = (event) =>{
  //   event.preventDefault();
  //   props.addToSavedList(movie);
  // };


// <div onClick {save} className="save-button">Save</div>
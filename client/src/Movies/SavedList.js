import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './SavedList.css';

const SavedList = (props) => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, index) => (
        <NavLink to={`/movies/${movie.id}`} className="saved-movie" activeClassName="selected-movie" key={index} >{movie.title}</NavLink>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}

export default SavedList;

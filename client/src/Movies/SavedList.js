import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span key={movie.id} className="saved-movie">{movie.title}</span>
        ))}
        <Link to="/" className="home-button">Home</Link>
        {/* <div className="home-button">Home</div> */}
      </div>
    );
  }
}

import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.list,"list on savedList");
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie,i) => (
          <Link key={i} to = {`/movies/${parseInt(movie.id,10)}`}><span className="saved-movie" key = {movie.id}>{movie.title}</span></Link>
        ))}
        <Link to = '/'> 
        <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}

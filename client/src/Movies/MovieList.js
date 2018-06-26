import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  
  goToLink = (url) => {
    this.props.history.push(url);
  }
  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
            <MovieDetails movie={movie} key = {movie.id} id = {movie.id}linkHandler = {this.goToLink}/>
        ))}
      </div>
    );
  }
}

function MovieDetails(props) {
  return <MovieCard title = {props.movie.title} 
  director = {props.movie.director} 
  metascore = {props.movie.metascore}
  stars = {props.movie.stars}
  id = {props.movie.id}
  linkHandler = {props.linkHandler}/>

  
}

import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard.js";
import "../styles/Movie.css";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Uncomment this code when you're ready for the stretch problems
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  // Used addToSavedList from App.js instead of this...DRY
  // saveMovie = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie)
  // }

  render() {
    // console.log("props", this.props);
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    // const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div
          className="save-button"
          onClick={() => {
            this.props.addToSavedList(this.state.movie);
          }}>
          Save
        </div>
      </div>
    );
  }
}

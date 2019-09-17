import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  // console.log(props)

  useEffect(() => {
    const id = props.match.params.id
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        console.log(response.data.stars)
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, [props.match.params.id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }


console.log(movie.stars)


  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
        <h3>Actors</h3>
        <p className="movie-star">{movie.stars} </p>

        {
          movie.stars.map(item => 
            <div key={item} className="movie-star">{item}</div>
          )
        } 
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
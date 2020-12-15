import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom'

export default function MovieList(props) {

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
/* [ ] When a user clicks on the movie card inside `MovieList` they should be taken to `/movies/{id of clicked movie here}` to see the details of the selected movie.
 */

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  const history = useHistory();


  return (
    <div className="movie-card" onClick={() => history.push(`/movies/${id}`)}>
      
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

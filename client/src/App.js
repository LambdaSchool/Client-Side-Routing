import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';


import Movie from './Movies/Movie'
import MovieCard from './Movies/MovieCard';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
          // debugger
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();

  }, []);


  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>
        <Link to='/'>Home </Link>
        <Link to='/Movies/MovieList/:id'>Movie</Link>
      </div>
      <Switch>
    
      {/* <Route>
        <SavedList list={saved}/>
      </Route> */}

      <Route path='/Movies/MovieList/:id'> 
        <Movie />
      </Route>

      <Route path='/'>
        <MovieList movies={movieList}/>
      </Route>

      </Switch>
    </div>
  );
}



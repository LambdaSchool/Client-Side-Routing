import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'


ReactDOM.render(
  <Router>
    <div>
      {/* <MovieList />
      <Movie /> */}
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' component={Movie} />
    </div>
  </Router>,
  document.getElementById('root')
);
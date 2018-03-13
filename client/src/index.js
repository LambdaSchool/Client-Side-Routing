// PR comment
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:movieId" component={Movie} />
    </div>
  </Router>,
  document.getElementById("root")
);

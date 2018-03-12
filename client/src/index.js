import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={Movie} exact />
      </div>
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));

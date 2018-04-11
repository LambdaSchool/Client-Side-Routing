import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import SavedList from './Movies/SavedList';
// import MovieList from './Movies/MovieList';
import * from './Movies';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path="/" component={MovieCard} />
          <Route path="/Movies/:id" 
            render={props => (<Movie {...props} addToSavedList={this.addToSavedList} />)}
          />
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import MovieSearchContainer from './component/MovieSearch/MovieSearch';
import MovieDetailContainer from './component/MovieDetail/MovieDetail';

class App extends Component {
  render() {
    return (
      <Router className="main-router">
        <div>
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer }/>
        </div>
      </Router>
    );
  }
}

export default App;
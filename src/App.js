// @flow
import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./lib/Movies";

import Index from "./pages/Index";
import MovieDetail from "./pages/MovieDetail";

import Container from "./reusable/components/Container";

class App extends Component {
  state = {
    popularMovies: []
  };

  componentDidMount() {
    Movies.getPopular()
      .then(({ results: popularMovies }) => this.setState({ popularMovies }))
      .catch(console.error);
  }

  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Index movies={this.state.popularMovies} />}
            />
            <Route path="/:movieId" component={MovieDetail} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;

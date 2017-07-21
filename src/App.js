// @flow
import React, { Component } from "react";
import styled, { css } from "styled-components";
import Movies from "./lib/Movies";

import Container from "./reusable/components/Container";
import MoviePreview from "./reusable/components/MoviePreview";

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, [col] 1fr);
  grid-template-rows: minmax(400px, auto);
  grid-gap: .75rem;
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, [col] 1fr);
  }
`;

const featuredMixin = css`
  grid-row: 1;
  grid-column: col 1 / span 2;
  height: 450px;
`;

const PreviewContainer = styled.div`
  height: 100%;
  min-height: 300px;

  ${({ featured }) => featured && featuredMixin};
`;

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
      <Container>
        <h1>Moovies</h1>
        <MovieGrid>
          {this.state.popularMovies.map((movie, i) =>
            <PreviewContainer key={movie.id} featured={i === 0}>
              <MoviePreview
                image={movie.backdrop_path}
                featured={i === 0}
                {...movie}
              />
            </PreviewContainer>
          )}
        </MovieGrid>
      </Container>
    );
  }
}
export default App;

// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviePreview from "../../reusable/components/MoviePreview";
import { slugify } from "../../helpers";

import Search from "../../containers/Search";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import PreviewContainer from "./components/PreviewContainer";
import SearchResults from "./components/SearchResults";

class Index extends Component {
  state = {
    showSearchResults: false,
    searchResults: []
  };

  setSearchResults = (searchResults: Movie[]) =>
    this.setState({ searchResults, showSearchResults: true });

  toggleShowSearchResults = () =>
    this.setState(state => ({ showSearchResults: !state.showSearchResults }));

  render() {
    const { showSearchResults, searchResults } = this.state;

    return (
      <div>
        <Hero>
          <div style={{ position: "relative" }}>
            <Search
              handleResults={this.setSearchResults}
              handleEscape={this.toggleShowSearchResults}
            />

            {showSearchResults &&
              <SearchResults
                results={searchResults}
                handleClose={this.toggleShowSearchResults}
              />}
          </div>
        </Hero>

        <Grid>
          {this.props.movies.map((movie: Movie, i) =>
            <PreviewContainer
              key={movie.id}
              featured={i === 0 || movie.vote_average >= 7.5}
            >
              <Link
                to={`/${movie.id}/${slugify(movie.title)}`}
                title={movie.title}
              >
                <MoviePreview
                  image={movie.backdrop_path}
                  featured={i === 0}
                  {...movie}
                />
              </Link>
            </PreviewContainer>
          )}
        </Grid>
      </div>
    );
  }
}

export default Index;

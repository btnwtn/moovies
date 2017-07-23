// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviePreview from "../../reusable/components/MoviePreview";
import { slugify } from "../../helpers";

import styled from "styled-components";
import { extractExcerpt } from "../../helpers";

import Movies, { PosterSizes } from "../../lib/Movies";

import Search from "../../containers/Search";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import PreviewContainer from "./components/PreviewContainer";

const ResultsContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  max-height: 50vh;
  z-index: 2;
  overflow: auto;
  border-radius: 3px;
  padding: .25rem;
  background-color: #fff;
  color: #000;

  > a:not(:last-child) {
    margin-bottom: .25rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem;
`;

const Title = styled.h3`
  margin: 0;
  margin-right: .25em;
  color: #222;
`;

const ResultContainer = styled.div`
  display: flex;
  border-radius: 3px;
  background-color: #fff;

  &:hover,
  &:focus {
    background-color: #f5f5f5;
  }
`;

const ReleaseDate = styled.span`
  color: #888;
  font-size: .75rem;
  font-weight: bold;
`;

const ResultContent = styled.div`flex: 1;`;

const Overview = styled.p`
  margin: 0;
  padding: .5rem;
  font-size: .9rem;
  color: #666;
`;

const Poster = styled.img`
  display: block;
  max-width: 100%;
`;

const ResultLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const NoResults = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem;
`;

const Message = styled.p`
  margin: 0;
  color: #646464;
`;

const CloseButton = styled.button`
  margin-left: auto;
  width: 1.5rem;
  height: 1.5rem;
  border: 0;
  border-radius: 50%;
  background-color: #e0e0e0;
  color: #383838;
`;

const Result = result =>
  <ResultContainer>
    <Poster
      src={
        result.poster_path
          ? Movies.image(result.poster_path, PosterSizes.TINY)
          : "/images/missing_poster.jpg"
      }
      alt=""
    />
    <ResultContent>
      <Header>
        <Title>
          {result.title}
        </Title>
        <ReleaseDate>
          ({result.release_date.split("-")[0]})
        </ReleaseDate>
      </Header>
      <Overview>
        {extractExcerpt(result.overview)}
      </Overview>
    </ResultContent>
  </ResultContainer>;

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
              <ResultsContainer>
                {searchResults.length
                  ? searchResults.map((movie: Movie) =>
                      <ResultLink
                        key={movie.id}
                        to={`/${movie.id}/${slugify(movie.title)}`}
                        title={movie.title}
                      >
                        <Result key={movie.id} {...movie} />
                      </ResultLink>
                    )
                  : <NoResults>
                      <Message>No results found…</Message>
                      <CloseButton
                        onClick={this.toggleShowSearchResults}
                        title="Close Results Panel"
                      >
                        &times;
                      </CloseButton>
                    </NoResults>}
              </ResultsContainer>}
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

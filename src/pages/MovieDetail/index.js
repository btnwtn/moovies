// @flow
import React, { Component } from "react";
import type { Match } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { slugify } from "../../helpers";
import ResponsiveEmbed from "react-responsive-embed";
import Movies, { BackdropSizes, PosterSizes } from "../../lib/Movies";

import MoviePreview from "../../reusable/components/MoviePreview";
import Container from "../../reusable/components/Container";
import {
  Hero,
  Aside,
  Poster,
  Genres,
  Genre,
  Content,
  Title,
  Heading,
  Overview,
  Page,
  Recommendations,
  Recommendation
} from "./components";

export default class MovieDetail extends Component {
  props: {
    match: Match
  };

  state = {
    loading: true,
    movie: {}
  };

  getStateFromAPI(props: { match: Match }) {
    const { movieId } = props.match.params;

    if (!movieId) {
      return Promise.resolve({})
    }

    return new Promise((resolve, reject) =>
      Promise.all([
        Movies.getDetails(parseInt(movieId, 10)),
        Movies.getVideos(parseInt(movieId, 10)),
        Movies.getRecommendations(parseInt(movieId, 10))
      ])
        .then(([movie, videos, recommendations]) =>
          resolve({
            loading: false,
            videos,
            recommendations,
            movie
          })
        )
        .catch(reject)
    );
  }

  componentDidMount() {
    this.getStateFromAPI(this.props)
      .then((nextState: Object) => this.setState(nextState))
      .catch(console.error);
  }

  componentWillReceiveProps(nextProps: { match: Match }) {
    this.getStateFromAPI(nextProps)
      .then((nextState: Object) => this.setState(nextState))
      .catch(console.error);
  }

  render() {
    if (!this.props.match.params.movieId) {
      return <Redirect to="/" />;
    }

    if (this.state.loading) {
      return null;
    }

    const { movie, recommendations } = this.state;

    const video =
      this.state.videos.results &&
      this.state.videos.results.find(vid => vid.site === "YouTube");

    return (
      <Container>
        <Hero image={Movies.image(movie.backdrop_path, BackdropSizes.LARGE)}>
          <Aside>
            <Poster src={Movies.image(movie.poster_path, PosterSizes.MEDIUM)} />
            <Genres>
              {movie.genres.map(({ name }) =>
                <Genre key={name}>
                  {name}
                </Genre>
              )}
            </Genres>
          </Aside>
          <Content>
            <Title>
              {movie.title} <small>({movie.release_date.split("-")[0]})</small>
            </Title>

            <Heading>Overview</Heading>
            <Overview>
              {movie.overview}
            </Overview>

            {video &&
              <div>
                <Heading>
                  {video.name}
                </Heading>
                <ResponsiveEmbed
                  src={`https://www.youtube.com/embed/${video.key}`}
                  allowFullScreen
                />
              </div>}
          </Content>
        </Hero>

        {recommendations &&
          recommendations.results &&
          <Page>
            <Recommendations>
              {recommendations.results.slice(0, 3).map(movie =>
                <Recommendation key={movie.id}>
                  <Link
                    to={`/${movie.id}/${slugify(movie.title)}`}
                    title={movie.title}
                  >
                    <MoviePreview image={movie.backdrop_path} {...movie} />
                  </Link>
                </Recommendation>
              )}
            </Recommendations>
          </Page>}
      </Container>
    );
  }
}

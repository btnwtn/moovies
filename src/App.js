import React, { Component } from "react";
import Movies from "./lib/Movies";

const HTTPS_ENABLED =
  process.env.REACT_APP_HTTPS_ENABLED.toLowerCase() === "true";

const PosterSizes = {
  TINY: "w92",
  SMALLER: "w154",
  SMALL: "w185",
  MEDIUM: "w300",
  LARGE: "w500",
  ORIGINAL: "original"
};

const Poster = ({ src, size = PosterSizes.LARGE, ...rest }) => {
  const PROTOCOL = HTTPS_ENABLED ? "https://" : "http://";
  const BASE_URL = "image.tmdb.org/t/p/";
  return <img src={`${PROTOCOL}${BASE_URL}${size}/${src}`} alt="" {...rest} />;
};

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
      <div>
        <h1>Moovies</h1>
        {this.state.popularMovies.map(movie =>
          <div key={movie.id}>
            <Poster src={movie.poster_path} alt={movie.title} />
          </div>
        )}
      </div>
    );
  }
}
export default App;

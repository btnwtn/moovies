import React from "react";
import { Link } from "react-router-dom";
import MoviePreview from "../../reusable/components/MoviePreview";
import { slugify } from "../../helpers";

import Search from "../../containers/Search";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import PreviewContainer from "./components/PreviewContainer";

const Index = ({ movies }) =>
  <div>
    <Hero>
      <Search />
    </Hero>

    <Grid>
      {movies.map((movie, i) =>
        <PreviewContainer
          key={movie.id}
          featured={i === 0 || movie.vote_average >= 7.5}
        >
          <Link to={`/${movie.id}/${slugify(movie.title)}`} title={movie.title}>
            <MoviePreview
              image={movie.backdrop_path}
              featured={i === 0}
              {...movie}
            />
          </Link>
        </PreviewContainer>
      )}
    </Grid>
  </div>;

export default Index;

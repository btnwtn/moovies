import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import MoviePreview from "../../reusable/components/MoviePreview";
import { slugify } from "../../helpers";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, [col] 1fr);
  grid-template-rows: minmax(400px, auto);
  grid-gap: .75rem;
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, [col] 1fr);
  }
`;

const featuredMixin = css`
  grid-column: span 2;
  height: 450px;
`;

const PreviewContainer = styled.div`
  height: 100%;
  min-height: 300px;

  ${({ featured }) => featured && featuredMixin};
`;

const Index = ({ movies }) =>
  <div>
    <h1>Moovies</h1>
    <Grid>
      {movies.map((movie, i) =>
        <PreviewContainer key={movie.id} featured={i % 3 === 0 && i < 6}>
          <Link to={`/${movie.id}/${slugify(movie.title)}`}>
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

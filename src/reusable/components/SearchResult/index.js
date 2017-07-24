// @flow
import React from "react";
import { extractExcerpt } from "../../../helpers";
import Movies, { PosterSizes } from "../../../lib/Movies";

import {
  Container,
  Poster,
  Body,
  Header,
  Title,
  ReleaseDate,
  Overview
} from "./components";

export default (result: Movie) =>
  <Container>
    <Poster
      src={
        result.poster_path
          ? Movies.image(result.poster_path, PosterSizes.TINY)
          : "/images/missing_poster.jpg"
      }
      alt=""
    />
    <Body>
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
    </Body>
  </Container>;

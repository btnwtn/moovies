// @flow
import React from "react";
import { extractExcerpt } from "../../../helpers";

import {
  Container,
  Content,
  Heading,
  RatingBadge,
  Title,
  Overview
} from "./components.js";

const MoviePreview = ({
  children,
  featured,
  vote_average,
  title,
  overview,
  ...rest
}: {
  featured: boolean,
  vote_average: string | number,
  title: string,
  overview: string
}) =>
  <Container {...rest}>
    <Content featured={featured}>
      <Heading>
        <RatingBadge>
          {vote_average}
        </RatingBadge>
        <Title style={{ marginLeft: ".5em" }}>
          {title}
        </Title>
      </Heading>
      <Overview>
        {extractExcerpt(overview)}
      </Overview>
    </Content>
  </Container>;

export default MoviePreview;

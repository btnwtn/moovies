import React from "react";
import { slugify } from "../../../../helpers";
import {
  Container,
  ResultLink,
  NoResults,
  Message,
  CloseButton
} from "./components";
import Result from "../../../../reusable/components/SearchResult";

export default ({ results, handleClose }) =>
  <Container>
    {results.length
      ? results.map((movie: Movie) =>
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
          <CloseButton onClick={handleClose} title="Close Panel">
            &times;
          </CloseButton>
        </NoResults>}
  </Container>;

// @flow
import React from "react";
import { pure } from "recompose";
import styled from "styled-components";

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-bottom: 2rem;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #181b1d;
`;

const SiteTitle = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Brand = pure(() =>
  <SiteTitle>
    <span role="img" aria-label="popcorn">
      🍿
    </span>{" "}
    MOOVIES{" "}
    <span role="img" aria-label="popcorn">
      🎬
    </span>
  </SiteTitle>
);

export default (props: any) =>
  <Hero>
    <Brand />
    {props.children}
  </Hero>;

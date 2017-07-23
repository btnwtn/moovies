// @flow
import React from "react";
import styled from "styled-components";
import Movies, { BackdropSizes } from "../../../lib/Movies";

export const Container = styled.div`
  position: relative;
  height: 100%;
  border-radius: 3px;
  background: url(${({ image, size }) =>
    Movies.image(image, size ? size : BackdropSizes.LARGE)});
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: ${({ featured }) => (featured ? "2rem" : "1rem")};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background: rgba(0, 0, 0, .8)
    linear-gradient(145deg, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0));
`;

export const Heading = styled.div`
  display: flex;
  margin-bottom: .75em;
`;

const Badge = styled.span`
  display: inline-flex;
  width: 1.75rem;
  height: 1.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f1cb00;
  color: #000;
  font-weight: bold;
  font-size: .75rem;
`;

const RatingContainer = styled.div`flex: 0 1.75rem;`;

export const RatingBadge = (props: any) =>
  <RatingContainer>
    <Badge {...props} />
  </RatingContainer>;

export const Title = styled.h2`
  margin: 0;
  color: #fff;
`;

export const Overview = styled.p`
  margin: 0;
  font-size: .9em;
  line-height: 1.2;
  color: #c2c2c2;
`;

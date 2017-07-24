import React from "react";
import styled, { css } from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 1.5rem;
  background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .8)),
    url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Hero = ({ image, ...rest }) =>
  <HeroContainer image={image}>
    <HeroContent {...rest} />
  </HeroContainer>;

export const Poster = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 3px;
`;

export const Page = styled.div`
  padding: 1rem;
  background-color: #141617;
`;

export const textShadow = css`
  text-shadow: 1px 2px 4px rgba(0, 0, 0, .9);
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  ${textShadow};
`;

export const Aside = styled.aside`flex: 25%;`;

export const Content = styled.div`
  flex: 75%;
  padding-left: 1rem;
`;

export const Heading = styled.h2`${textShadow};`;

export const Overview = styled.p`
  line-height: 1.45;
  ${textShadow};
`;

export const Genre = styled.span`
  display: inline-block;
  margin-top: .5rem;
  margin-right: .5rem;
  padding: .4rem;
  border: 1px solid #fff;
  border-radius: 9999px;
  font-size: .8rem;
  opacity: .9;
`;

export const Genres = styled.div`margin-top: .5rem;`;

export const Recommendation = styled.div`
  height: 100%;
  min-height: 300px;
  border-radius: 3px;

  &:hover,
  &:focus {
    transform: translateY(-1px);
  }
`;

export const Recommendations = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: .5rem;
`;

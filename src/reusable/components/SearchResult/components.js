import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 3px;
  background-color: #fff;

  &:hover,
  &:focus {
    background-color: #f5f5f5;
  }
`;

export const Body = styled.div`flex: 1;`;

export const Poster = styled.img`
  display: block;
  max-width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem;
`;

export const Title = styled.h3`
  margin: 0;
  margin-right: .25em;
  color: #222;
`;

export const ReleaseDate = styled.span`
  color: #888;
  font-size: .75rem;
  font-weight: bold;
`;

export const Overview = styled.p`
  margin: 0;
  padding: .5rem;
  font-size: .9rem;
  color: #666;
`;

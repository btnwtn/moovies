import styled from "styled-components";

const SearchBar = styled.input`
  display: block;
  width: 300px;
  padding: .5rem;
  border: 2px solid #888;
  border-radius: 4px;
  font-size: 1.25rem;
  color: #222;
  transition: width 150ms ease-in;

  &:hover,
  &:focus {
    border-color: #1a9ce0;
  }

  &:focus {
    width: 450px;
  }

  &::placeholder {
    color: #cecece;
  }
`;

export default SearchBar;

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, [col] 1fr);
  grid-template-rows: minmax(400px, auto);
  grid-gap: .75rem;
  grid-auto-flow: dense;

  @media (max-width: 769px) {
    grid-template-columns: repeat(1, [col] 1fr);
  }
`;

export default Grid;

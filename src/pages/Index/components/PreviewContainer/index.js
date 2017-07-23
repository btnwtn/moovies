// @flow
import styled, { css } from "styled-components";

const featuredMixin = css`
  height: 450px;
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const PreviewContainer = styled.div`
  height: 100%;
  min-height: 300px;
  border-radius: 3px;

  &:hover,
  &:focus {
    transform: translateY(-1px);
  }

  ${({ featured }) => featured && featuredMixin};
`;

export default PreviewContainer;

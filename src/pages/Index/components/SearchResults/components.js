import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  max-height: 50vh;
  z-index: 2;
  overflow: auto;
  border-radius: 3px;
  padding: .25rem;
  background-color: #fff;
  color: #000;

  > a:not(:last-child) {
    margin-bottom: .25rem;
  }
`;

export const ResultLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const NoResults = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem;
`;

export const Message = styled.p`
  margin: 0;
  color: #646464;
`;

export const CloseButton = styled.button`
  margin-left: auto;
  width: 1.5rem;
  height: 1.5rem;
  border: 0;
  border-radius: 50%;
  background-color: #e0e0e0;
  color: #383838;
`;

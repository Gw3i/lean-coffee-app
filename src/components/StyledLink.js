import styled, { css } from "styled-components";

const StyledLink = styled.a`
  border: 1px solid black;
  border-radius: 5px;
  background: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
`;

export default StyledLink;

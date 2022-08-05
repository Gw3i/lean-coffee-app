import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background-color: none;

  &:hover {
    background-color: lightgray;
  }
`;

export default StyledButton;

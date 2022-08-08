import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background: none;
  padding: 5px 10px;

  &:hover {
    background-color: lightgrey;
  }
`;

export default StyledButton;

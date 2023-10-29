import styled from "styled-components";

import { rem } from "@styles/Utilities.styled";


export const StyledPrimaryButton = styled.button`
  padding: 0.5em 1.5em;
  color: var(--clr-white);
  background-color: var(--clr-accent);
  font-size: ${rem(15)};
  font-weight: 500;
  border-radius: var(--border-radius-3);
  transition: background-color 0.2s;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: hsl(180, 96%, 35%);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: hsl(208, 11%, 75%);
  }
`;

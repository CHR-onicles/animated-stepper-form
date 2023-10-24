import styled from "styled-components";

import { flexSpBetween, rem } from "@styles/Utilities.styled";


export const StyledHome = styled.main`
  nav {
    ${flexSpBetween}
    padding: 1rem;
    margin-top: 2rem;
    border: 1px solid var(--clr-gray-400);
    border-radius: var(--border-radius-3);
  }

  img {
    width: min(100%, ${rem(1000)});
    margin: 3rem auto;
  }

  main {
    width: min(100%, ${rem(750)});
    padding-bottom: 4rem;
    margin-inline: auto;

    h2 {
      margin-top: 3rem;
      margin-bottom: 1rem;
    }
  }
`;

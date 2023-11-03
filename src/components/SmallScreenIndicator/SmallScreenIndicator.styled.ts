import styled from "styled-components";

import { flexColumn, rem } from "@styles/Utilities.styled";


export const StyledSmallScreenIndicator = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  text-align: center;

  .content {
    ${flexColumn}
    justify-content: center;
    height: 100%;
  }

  .rotate-icon {
    margin-top: 6rem;
    margin-inline: auto;
  }

  .text-content {
    margin-top: 3rem;
    /* outline: 1px solid red; */

    h1 {
      font-size: ${rem(35)};
      font-weight: 600;
    }

    p {
      margin-top: 1.5rem;
      font-size: ${rem(13)};
      line-height: 1;

      &:last-child {
        margin-top: 0.5rem;
      }
    }
  }
`;

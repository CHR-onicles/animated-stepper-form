import styled from "styled-components";

import { mq, rem } from "@styles/Utilities.styled";


export const SectionText = styled.p`
  margin-top: 2rem;
  color: var(--clr-gray-800);
  font-size: ${rem(15)};
  text-align: center;
  max-width: 45ch;
  margin-inline: auto;

  @media screen and (${mq.medium}) {
    text-align: left;
    margin-inline: 0;
  }
  @media screen and (${mq.large1}) {
    max-width: 50ch;
  }
`;

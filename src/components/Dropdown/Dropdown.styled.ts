import { Content, Item } from "@radix-ui/react-select";
import styled from "styled-components";

import { clipBorderRadius, flexCenter, rem } from "@styles/Utilities.styled";


export const StyledDropdown = styled.div`
  .SelectTrigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0.7em 1.5em 0.7em 0;
    color: var(--clr-primary-700);
    font-size: ${rem(13)};
    border-radius: var(--border-radius-2);

    &[data-state="open"] {
      border-color: rgb(0, 0, 0, 0);
      box-shadow: inset 0 0 0 1px var(--clr-primary-400);
    }

    &[data-placeholder] {
      color: var(--clr-gray-400);
    }
  }

  .SelectIcon {
    color: inherit;
    ${flexCenter};
  }
`;

export const StyledDropdownContent = styled(Content)`
  max-height: var(--radix-select-content-available-height);
  padding-block: 0.5rem;
  background: white;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  z-index: 11;
  ${clipBorderRadius("var(--border-radius-2)")}

  &.trigger-width {
    width: var(--radix-select-trigger-width);
  }

  &.max-content {
    width: max-content;
  }

  .SelectViewport {
    padding: 5px;
  }

  .SelectScrollButton {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background-color: white;
    color: var(--violet-11);
    cursor: default;
  }
`;

export const StyledDropdownSelectItem = styled(Item)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.6em 2em 0.6em 1.75em;
  font-size: ${rem(14)};
  line-height: 1;
  color: inherit;
  border-radius: 3px;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;

  &[data-disabled] {
    color: var(--mauve-8);
    pointer-events: none;
    cursor: unset;
  }

  &[data-highlighted] {
    outline: none;
    background-color: var(--clr-primary-400);
    color: var(--clr-white);
  }

  .SelectItemIndicator {
    position: absolute;
    left: 0;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

import { Root } from "@radix-ui/react-scroll-area";
import styled from "styled-components";

import {
  absoluteCenter,
  clipBorderRadius,
  pseudo,
  rem,
  size,
} from "@styles/Utilities.styled";


export const StyledScrollArea = styled(Root)`
  --scrollbar-size: ${rem(10)};

  ${size("100%")}
  ${clipBorderRadius("4px")}

  &.white-bg {
    background-color: var(--clr-white);
  }

  .ScrollAreaViewport {
    ${size("inherit")}
    padding-inline: 1.5rem;
    padding-bottom: 1rem;
    border-radius: inherit;
  }

  .ScrollAreaScrollbar {
    display: flex;
    /* ensures no selection */
    user-select: none;
    /* disable browser handling of all panning and zooming gestures on touch devices */
    touch-action: none;
    padding: 2px;
    background-color: var(--clr-gray-150);
    transition: background-color 160ms ease-out;
  }

  .ScrollAreaScrollbar:hover {
    background-color: var(--clr-gray-200);
  }

  .ScrollAreaScrollbar[data-orientation="vertical"] {
    width: var(--scrollbar-size);
  }

  .ScrollAreaScrollbar[data-orientation="horizontal"] {
    flex-direction: column;
    height: var(--scrollbar-size);
  }

  .ScrollAreaThumb {
    position: relative;
    flex: 1;
    background: var(--clr-gray-400);
    border-radius: var(--scrollbar-size);
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  .ScrollAreaThumb::before {
    ${pseudo}
    ${absoluteCenter}
    ${size("100%")}
    min-width: ${rem(44)};
    min-height: ${rem(44)};
  }

  .ScrollAreaCorner {
    background: var(--clr-gray-150);
  }
`;

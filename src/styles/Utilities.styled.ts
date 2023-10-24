import { css, keyframes } from "styled-components";

/**
 * Helper function to convert from px to rem (1rem = 16px by browser default).
 * @param value number representing pixels.
 * @param omitUnit flag representing whether "rem" units should be ignored.
 * @returns string containing rem equivalent of pixel value.
 */
export const rem = (value: number, omitUnit = false) => {
  return value === 0 ? "0" : `${value / 16}${omitUnit === true ? "" : "rem"}`;
};

export const alpha = (color: string, opacity = 1) =>
  `color-mix(in srgb, ${color} ${opacity * 100}%, rgb(0,0,0,0))`;

// Breakpoints (mobile up)
export const bp = {
  small: `${rem(768, true)}em`,
  medium: `${rem(1024, true)}em`,
  large1: `${rem(1200, true)}em`,
  large2: `${rem(1440, true)}em`,
  large3: `${rem(1600, true)}em`,
  large4: `${rem(1920, true)}em`,
  extreme: `${rem(2100, true)}em`,
};

// Media queries
export const mq = {
  small: `(min-width: ${bp.small})`,
  medium: `(min-width: ${bp.medium})`,
  large1: `(min-width: ${bp.large1})`,
  large2: `(min-width: ${bp.large2})`,
  large3: `(min-width: ${bp.large3})`,
  large4: `(min-width: ${bp.large4})`,
  extreme: `(min-width: ${bp.extreme})`,
};

/*********************************************************************
CSS UTILITIES (similar to Sass mixins)
**********************************************************************/
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const alignItemsCenter = css`
  display: flex;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexSpBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const gridCenter = css`
  display: grid;
  place-items: center;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const pseudo = css`
  content: "";
  position: absolute;
`;

export const size = (width: string, height = width) => css`
  width: ${width};
  height: ${height};
`;

export const circle = (diameter: string) => css`
  ${size(diameter)}
  border-radius: 50%;
`;

export const marginInlineAuto = (width: string) => css`
  margin-inline: auto;
  width: ${width};
`;

export const clipBorderRadius = (borderRadius: string) => css`
  border-radius: ${borderRadius};
  overflow: hidden;
`;

export const media = (bp: string) => `@media screen and (min-width: ${bp})`;

export const revealFromBottom = keyframes`
  to {
    transform: translateY(0%) skewY(0);
}
`;

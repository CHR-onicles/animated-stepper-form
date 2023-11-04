import styled from "styled-components";

import {
  alignItemsCenter,
  alpha,
  bp,
  clipBorderRadius,
  flexCenter,
  flexColumn,
  media,
  pseudo,
  rem,
  size,
  spin,
} from "@styles/Utilities.styled";


export const StyledHome = styled.section`
  position: relative;
  ${flexCenter}
  height: 100vh;
  overflow: hidden;

  &::before {
    ${pseudo}
    width: 200vw;
    height: 400vh;
    background: linear-gradient(45deg, #1a81fb 0%, #3cb3fb 30%, #8d76f7 80%);
    z-index: -1;
    animation: ${spin} 20s linear infinite;
  }

  .content {
    display: flex;
    width: min(100%, ${rem(1024)});
    height: var(--app-height);
    margin-inline: auto;
    box-shadow: 0px 10px 38px rgba(22, 23, 24, 0.1);
    outline: 10px solid ${alpha("var(--clr-white)", 0.2)};
    ${clipBorderRadius("var(--border-radius-4)")};
    /* outline: 1px solid brown; */
  }

  .left-section,
  .right-section {
    padding-top: 6rem;
  }

  .left-section {
    ${flexColumn}
    width: ${rem(280)};
    background-color: hsl(217, 32%, 30%);

    ${media(bp.medium)} {
      width: ${rem(320)};
    }

    .logo {
      background-color: var(--clr-white);
      ${flexCenter}
      padding: 0.75rem 1rem;
      width: 50%;
      margin: -4rem 0 1rem 1.5rem;

      ${media(bp.medium)} {
        margin-left: 2.75rem;
      }
    }

    .stepper {
      --gap: 2.5rem;
      margin-top: 3rem;

      ${flexColumn}
      align-self: center;
      gap: var(--gap);
      width: fit-content;
      margin-left: -3rem;
      /* outline: 1px solid red; */

      ${media(bp.medium)} {
        margin-left: -4rem;
      }

      &-item {
        --stroke-color: var(--clr-gray-400);

        ${alignItemsCenter}
        gap: 0.75rem;
        text-align: left;
        line-height: 1.1;
        color: var(--stroke-color);
        font-weight: 500;

        &.completed {
          --color: var(--green-10);

          color: var(--color);

          .icon-wrapper {
            border-color: var(--color);
            color: var(--color);

            &::before {
              background-color: var(--color);
            }
          }
        }

        &.active {
          --color: ${alpha("var(--clr-white)", 0.9)};

          color: var(--color);

          .icon-wrapper {
            color: var(--color);
            border-color: var(--color);

            &::before {
              background-color: var(--color);
            }
          }
        }

        .icon-wrapper {
          --font-size: 1rem;

          position: relative;
          ${flexCenter}
          ${size("calc(var(--font-size) * 2.4)")}
          font-size: var(--font-size);
          border-radius: 50%;
          border: 2px solid var(--stroke-color);
          z-index: 2;
          /* background-color: var(--clr-white); */

          &::before {
            ${pseudo}
            top: calc(100% + 0.6rem);
            left: 50%;
            transform: translateX(-50%);
            height: calc(var(--gap) - 1rem);
            width: 2px;
            background-color: var(--stroke-color);
            border-radius: 100vmax;
          }

          span {
            font-size: ${rem(14)};
            text-align: center;
            font-weight: 400;
          }
        }

        &:last-child {
          .icon-wrapper::before {
            content: none;
          }
        }
      }
    }
  }

  .right-section {
    background-color: hsl(180, 9%, 98%);
    padding-left: 2.5rem;
    width: ${rem(500)};
    /* outline: 1px solid red; */

    ${media(bp.medium)} {
      padding-left: 5rem;
      width: ${rem(724)};
    }

    .form {
      ${flexColumn}
      gap: 1rem;
      width: min(90%, ${rem(400)});
      /* height: ${rem(350)}; */
      transition: transform 0.2s ease-out, opacity 0.2s ease-out;

      ${media(bp.medium)} {
        width: min(90%, ${rem(450)});
      }

      &-step-counter {
        font-size: ${rem(14)};
        font-weight: 500;
        color: var(--clr-primary-400);
      }

      &-group {
        ${flexColumn}
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      &-field {
        ${flexColumn}
      }

      &-field {
        &.half {
          ${media(bp.medium)} {
            width: calc(50% - 1rem);
          }
        }
      }

      .SelectTrigger {
        width: 100%;
        text-align: left;
        justify-content: space-between;
        padding: 0.7em 1.5em 0.7em 1em;
        border: 1px solid var(--clr-gray-300);
        /* outline: 1px solid red; */
      }

      .form-footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 2rem;
        gap: 2rem;

        .prev-btn {
          font-weight: 500;
          transition: color 0.1s;

          &:hover {
            color: var(--clr-primary-400);
          }
        }
      }
    }
  }
`;

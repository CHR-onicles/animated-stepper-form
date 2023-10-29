import styled from "styled-components";

import {
  alignItemsCenter,
  bp,
  flexCenter,
  flexColumn,
  media,
  pseudo,
  rem,
  size,
} from "@styles/Utilities.styled";


export const StyledHome = styled.section`
  height: 100vh;
  background-color: var(--clr-white);
  margin-bottom: 8rem;

  .content {
    display: flex;
    width: min(100%, ${rem(1024)});
    height: 100%;
    margin-inline: auto;
    box-shadow: 0px 10px 38px rgba(22, 23, 24, 0.1);
    /* outline: 1px solid brown; */

    > :first-child {
      flex-basis: 30%;
    }
    > :last-child {
      flex-basis: 70%;
    }
  }

  .left-section,
  .right-section {
    padding-top: 6rem;
  }

  .left-section {
    ${flexColumn}
    background-color: var(--clr-primary-100);
    /* background-color: color-mix(
      in srgb,
      var(--clr-primary-100) 50%,
      rgb(0, 0, 0, 0)
    ); */
    /* background: linear-gradient(300deg, var(--clr-primary-100) 15%, rgb(0,0,0,0)); */

    .logo {
      ${flexCenter}
      padding-block: 0.75rem;
      width: 40%;
      margin: -4rem 0 1rem 1.5rem;

      ${media(bp.medium)} {
        margin-left: 2.75rem;
      }
    }

    .stepper {
      --gap: 2.5rem;
      margin-top: 2rem;

      ${flexColumn}
      align-self: center;
      gap: var(--gap);
      width: fit-content;
      margin-left: -2rem;
      /* outline: 1px solid red; */

      ${media(bp.medium)} {
        margin-left: -4rem;
      }

      &-item {
        ${alignItemsCenter}
        gap: 0.75rem;
        text-align: left;
        line-height: 1.1;
        color: var(--clr-gray-300);
        font-weight: 500;

        &.completed {
          color: var(--green-11);

          .icon-wrapper {
            border-color: var(--green-10);
            background-color: var(--green-3);
            color: var(--green-11);

            &::before {
              background-color: var(--green-11);
            }
          }
        }

        &.active {
          color: var(--clr-primary-400);

          .icon-wrapper {
            background-color: var(--clr-primary-400);
            color: var(--clr-white);
            border-color: var(--clr-primary-400);

            &::before {
              background-color: var(--clr-primary-400);
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
          border: 2px solid var(--clr-gray-300);
          z-index: 2;
          background-color: var(--clr-white);

          &::before {
            ${pseudo}
            top: calc(100% + 0.6rem);
            left: 50%;
            transform: translateX(-50%);
            height: calc(var(--gap) - 1rem);
            width: 2px;
            background-color: var(--clr-gray-300);
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

    .start-over-btn {
      ${alignItemsCenter}
      gap: 0.5rem;
      margin: auto 0 4rem 1.8rem;
      font-weight: 500;
      font-size: ${rem(14)};
      transition: color 0.1s;

      ${media(bp.medium)} {
        margin: auto 0 4rem 3rem;
      }

      &:hover {
        color: var(--clr-primary-400);
      }
    }
  }

  .right-section {
    background-color: var(--clr-white);
    padding-left: 2.5rem;

    ${media(bp.medium)} {
      padding-left: 5rem;
    }

    .form {
      ${flexColumn}
      gap: 1rem;
      width: min(100%, ${rem(400)});
      height: ${rem(350)};
      transition: transform 0.2s ease-out, opacity 0.2s ease-out;
      /* outline: 1px solid red; */

      ${media(bp.medium)} {
        width: min(100%, ${rem(430)});
      }

      &-step-counter {
        font-size: ${rem(14)};
        font-weight: 500;
        color: var(--clr-primary-400);
      }

      .heading-container {
        line-height: 1.2;

        .heading {
          font-size: ${rem(24)};
          font-weight: 600;

          span {
            text-transform: capitalize;
          }
        }

        .sub-heading {
          font-size: ${rem(13)};
          color: var(--clr-gray-400);
          margin-top: 0.25rem;
        }
      }

      &-group {
        ${flexColumn}
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      &-field {
        ${flexColumn}
      }

      &-field-wrapper,
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

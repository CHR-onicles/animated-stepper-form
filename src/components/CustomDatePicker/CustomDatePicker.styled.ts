import styled from "styled-components";

import {
  alpha,
  bp,
  flexCenter,
  media,
  rem,
  size,
} from "@styles/Utilities.styled";


interface StyledCustomDatePickerProps {
  $isInline: boolean;
  $isReadOnly: boolean;
  $isFullWidth: boolean;
}

export const StyledCustomDatePicker = styled.div<StyledCustomDatePickerProps>`
  position: relative;
  width: ${({ $isFullWidth }) => ($isFullWidth ? "100%" : "fit-content")};
  /* outline: 1px solid red; */

  .calendar-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.75em;
    ${size(rem(16))}
    color: ${({ $isReadOnly }) =>
      $isReadOnly ? "var(--clr-gray-400)" : "var(--clr-primary-700)"};

    z-index: 1;
    pointer-events: none;
    /* outline: 1px solid red; */
  }

  .react-datepicker {
    --day-time-item-margin: 0.3rem;
    --time-box-width: ${rem(120)};
    font-family: inherit;
    border-color: var(--clr-gray-150);
    box-shadow: 0 0 10px ${alpha("var(--clr-primary-700)", 0.1)};

    &-wrapper {
      width: 100%;
    }

    &__input-container {
    }

    &__day-name,
    &__day,
    &__time-name {
      ${media(bp.medium)} {
        width: 1.8rem;
        line-height: 1.8rem;
        margin: var(--day-time-item-margin);
      }
    }

    &__navigation {
      &--next {
        right: ${({ $isInline }) =>
          $isInline
            ? "calc(var(--time-box-width) + var(--day-time-item-margin))"
            : "0"};
      }

      &-icon {
        top: 8px;

        ${media(bp.medium)} {
          top: 10px;
        }

        &::before {
          border-color: var(--clr-primary-700);
        }
      }
    }

    &__month-container {
      ${media(bp.medium)} {
        width: unset;
      }
    }

    &__header {
      padding-top: 0.75rem;
      background-color: rgb(0, 0, 0, 0);
      color: var(--clr-primary-700);
      border-bottom: none;

      ${media(bp.medium)} {
        padding-top: 1rem;
      }

      &__dropdown--select {
        margin-top: 0.5rem;
        padding-inline: 0.25rem;
      }

      &__year-select {
        padding-inline: 0.4rem;
        cursor: pointer;
        color: var(--clr-primary-700);
      }
    }

    &__current-month {
      color: var(--clr-primary-700);
    }

    &__day-names {
      ${media(bp.medium)} {
        margin-top: 0.8rem;
        margin-bottom: -1rem;
      }

      & > * {
        color: var(--clr-primary-700);
      }
    }

    &__day {
      border-radius: 50%;

      &:hover:not(.react-datepicker__day--selected) {
        background-color: var(--clr-primary-100);
      }

      &-name {
        font-weight: bold;
      }

      &--selected {
        border-radius: 50%;
        background-color: var(--clr-primary-400);
        color: var(--clr-white);
      }

      &--keyboard-selected {
        background-color: var(--clr-primary-100);
      }
    }

    &-time__header {
      color: var(--clr-primary-700) !important;
    }

    &__time-container {
      border-color: var(--clr-gray-150);
      width: unset;
    }

    &__time-box {
      ${media(bp.medium)} {
        width: var(--time-box-width) !important;
      }
    }

    &__time-list {
      overflow: overlay;
      width: 100%;

      &::-webkit-scrollbar {
        background-color: var(--clr-gray-150);
        width: 7px;

        &:hover {
          background-color: var(--clr-gray-175);
        }
      }

      &::-webkit-scrollbar-thumb {
        border: 4px solid var(--clr-gray-400);
        background-clip: content-box;
        border-radius: 20px;
      }
    }

    &__time-list-item {
      ${media(bp.medium)} {
        ${flexCenter}
        height: ${rem(38)} !important;
        padding: 0;
      }

      &:hover:not(
          .react-datepicker__time-list-item--disabled,
          .react-datepicker__time-list-item--selected
        ) {
        background-color: var(--clr-primary-100) !important;
      }

      &--disabled {
        &:hover {
          background: none !important;
        }
      }

      &--selected {
        color: var(--clr-white);
        background-color: var(--clr-primary-400) !important;
      }
    }
  }
`;

import styled, { css } from 'styled-components';

import { shadow, font } from '@ustudio-ui/theme/mixin';

import type { InputProps } from './input.props';

const invalidState = css`
  &:not(:read-only) {
    border-color: var(--c-critical-strong);

    &:focus {
      border-color: var(--c-critical-weak-up);
    }
  }
`;

export const Input = styled.input<Pick<InputProps<string | number>, 'isInvalid'>>(
  ({ isInvalid }) => css`
    height: 28px;
    width: 100%;

    padding: 2px 8px 3px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--c-base-strong);
    background-color: var(--c-base-weak);

    border: 1px solid var(--c-faint-strong-down);
    border-radius: 2px;

    ${font.body.p};

    transition: all 200ms;

    -moz-appearance: textfield;
    -webkit-appearance: none;

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
    }

    &:focus {
      border-color: var(--c-accent-strong);
    }

    &:read-only {
      color: var(--c-faint-strong-up);
      border-color: var(--c-faint-weak-up);

      &::placeholder {
        opacity: 1;
      }
    }

    &:disabled {
      color: var(--c-faint-strong-down);
      background-color: var(--c-faint-weak-down);
      border-color: var(--c-faint-weak-up);

      &:hover {
        box-shadow: none;
      }

      &::placeholder {
        color: var(--c-faint-weak-up);
      }
    }

    ${isInvalid && invalidState};
    &:user-invalid {
      ${invalidState};
    }

    &::placeholder {
      color: var(--c-faint-strong-down);
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `
);

const Styled = { Input };

export default Styled;

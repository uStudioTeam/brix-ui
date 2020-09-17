import styled, { css } from 'styled-components';

import { shadow } from '@ustudio-ui/theme/mixin';

import Check from '../../assets/icons/check.inline.svg';

import type { CheckboxProps } from './checkbox.props';

export const CheckIcon = styled(Check)`
  width: 14px;
  height: 14px;

  transform: translateY(2.5%);
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;

  opacity: 0;
`;

// Did not specify ReturnType due to `styled-components` typing inconsistency
const checkedShapeColor = (color: string) => {
  return css`
    background-color: var(--c-${color});
    border-color: var(--c-${color});
  `;
};

const checkedValidity = (color: 'accent' | 'critical') => {
  return css`
    ${checkedShapeColor(`${color}-strong`)}

    &:hover {
      box-shadow: ${shadow(`${color}-strong`, 0.25)};
    }

    &:focus-within {
      ${checkedShapeColor(`${color}-strong-down`)}
    }

    &:active {
      ${checkedShapeColor(`${color}-weak-up`)}
    }
  `;
};

export const Checkbox = styled.label<Pick<CheckboxProps, 'value' | 'isDisabled' | 'isInvalid'>>(
  ({ value, isDisabled, isInvalid }) => css`
    position: relative;

    width: 16px;
    height: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--c-base-weak);

    border-width: 1px;
    border-style: solid;
    border-radius: 2px;

    transition: all 200ms;

    cursor: pointer;

    ${isDisabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          &:active {
            transform: scale(0.975);
          }
        `}

    ${value
      ? // Checked
        css`
          ${checkedValidity('accent')};

          ${isInvalid &&
          css`
            ${checkedValidity('critical')};
          `}

          ${isDisabled &&
          css`
            &:hover {
              box-shadow: none;
            }

            &,
            &:active {
              ${checkedShapeColor('faint-weak-up')}
            }
          `}
        `
      : // Unchecked
        css`
          background-color: var(--c-base-weak);
          border-color: var(--c-faint-strong-down);

          &:hover {
            box-shadow: ${shadow('base-strong', 0.15)};
          }

          &:focus-within,
          &:active {
            border-color: var(--c-accent-strong);
          }

          &:active {
            color: var(--c-accent-strong-down);
          }

          ${isInvalid &&
          css`
            border-color: var(--c-critical-strong);

            &:focus-within,
            &:active {
              border-color: var(--c-critical-weak-up);
            }

            &:active {
              color: var(--c-critical-weak-up);
            }
          `}

          ${isDisabled &&
          css`
            background-color: var(--c-faint-weak-down);

            &:hover {
              box-shadow: none;
            }

            &,
            &:active {
              color: var(--c-faint-weak-down);
              border-color: var(--c-faint-weak-up);
            }
          `}
        `}
  `
);

const Styled = { CheckIcon, Input, Checkbox };

export default Styled;

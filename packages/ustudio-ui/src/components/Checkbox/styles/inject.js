import { css } from 'styled-components';

function disabledStyles(isDisabled) {
  return isDisabled
    ? css`
        color: var(--c-neutral);
        cursor: not-allowed;

        &:active,
        &:focus {
          pointer-events: none;
        }
      `
    : '';
}

export const inject = { disabledStyles };

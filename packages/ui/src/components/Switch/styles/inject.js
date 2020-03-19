import { css } from 'styled-components';

const disabledStyles = isDisabled => {
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
};

const borderRadius = alternative => `border-radius: ${alternative ? 'var(--border-radius)' : 'var(--i-regular)'}`;

const thumbBorderRadius = alternative => `border-radius: ${alternative ? '1px' : 'calc(var(--i-regular) - 4px)'}`;

export const inject = { disabledStyles, borderRadius, thumbBorderRadius };

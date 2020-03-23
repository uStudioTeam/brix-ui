import { css } from 'styled-components';

const background = (background = 'var(--g-primary)') => `background: ${background}`;

const color = (color = 'var(--c-lightest)') => `color: ${color}`;

const disabledStyles = isDisabled => {
  return isDisabled
    ? css`
        color: var(--c-neutral);
        background: var(--c-light);
        cursor: not-allowed;
      `
    : '';
};

export const inject = { background, color, disabledStyles };

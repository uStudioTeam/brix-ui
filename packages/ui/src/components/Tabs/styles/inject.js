import { css } from 'styled-components';

const tabActiveStyles = isActive => {
  return isActive
    ? css`
        &:not([disabled]) {
          color: var(--c-lightest);
        }
      `
    : '';
};

export const inject = { tabActiveStyles };

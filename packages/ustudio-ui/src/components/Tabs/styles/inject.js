import { css } from 'styled-components';

const tabActiveStyles = ({ isActive, TabContent }) => {
  return isActive
    ? css`
        &:not([disabled]) {
          color: var(--c-lightest);
          ${TabContent} {
            cursor: default;
          }
        }
      `
    : '';
};

export const inject = { tabActiveStyles };

import { css } from 'styled-components';

const dimension = (dimension, isEditing) => `${isEditing ? `${dimension}px` : '100%'}`;

const opacity = isEditing => (isEditing ? 1 : 0);

const disabledStyles = isDisabled =>
  isDisabled
    ? css`
        color: var(--c-neutral);
        cursor: not-allowed;

        &:active,
        &:focus {
          pointer-events: none;
        }
      `
    : ``;

export const inject = { dimension, opacity, disabledStyles };

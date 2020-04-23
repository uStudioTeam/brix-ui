import { css } from 'styled-components';

const dimension = (dimension, isEditing) => `${isEditing ? `${dimension}px` : '100%'}`;

const opacity = isEditing => (isEditing ? 1 : 0);

const disabledStyles = ({ isDisabled, Icon }) =>
  isDisabled
    ? css`
        color: var(--c-neutral);
        cursor: not-allowed;

        &:active,
        &:focus {
          pointer-events: none;
        }
      `
    : css`
        &:hover {
          ${Icon} {
            color: var(--c-primary);
          }
        }
      `;

const afterToggle = isEditing => css`
  transform: scaleX(${isEditing ? 1 : 0});
  transform-origin: left;
  transition: transform var(--transition);
`;

export const inject = { dimension, opacity, disabledStyles, afterToggle };

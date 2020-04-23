import { css } from 'styled-components';
import { Mixin } from '../../../theme';

const background = (background = 'var(--g-primary)') => `background: ${background}`;

const color = (color = 'var(--c-white)') => `color: ${color}`;

const avatarSize = size => {
  switch (size) {
    case 'small':
      return css`
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 1.75rem;

        ${Mixin.Font.bodySmall()};
      `;
    case 'large':
      return css`
        width: 4rem;
        height: 4rem;
        border-radius: 4rem;

        ${Mixin.Font.h2()};
      `;
    case 'medium':
    default:
      return css`
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 2.75rem;

        ${Mixin.Font.h5()};
      `;
  }
};

const disabledStyles = isDisabled => {
  return isDisabled
    ? css`
        background: var(--c-light);
        color: var(--c-neutral);
        cursor: not-allowed;
      `
    : '';
};

export const inject = { background, color, avatarSize, disabledStyles };

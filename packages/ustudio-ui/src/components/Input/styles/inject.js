import { css } from 'styled-components';
import { Mixin } from '../../../theme';

const inputContainerDisabledStyles = ({ isDisabled, Input }) => {
  return isDisabled
    ? css`
        cursor: not-allowed;
        color: var(--c-neutral);
        background-color: var(--c-light);
        border-color: var(--c-light);
      `
    : css`
        ${Mixin.Device.mobile(css`
          &:active {
            box-shadow: var(--s-light);

            &:after {
              transform: scale(1);
            }
          }
        `)}

        ${Mixin.Device.desktop(css`
          &:hover {
            border-color: var(--c-light);
            box-shadow: var(--s-light);
          }

          &:focus-within {
            ${Input}::placeholder {
              opacity: 0;
            }

            border-color: var(--c-light);
            box-shadow: var(--s-light);

            &:after {
              transform: scale(1);
            }
          }
        `)}
      `;
};

// File Input

const fileInputColorToggle = value => {
  return typeof value !== 'undefined' && value?.length
    ? css`
        color: inherit;
      `
    : css`
        color: var(--c-neutral);
      `;
};

const fileInputWrapperDisabledStyles = isDisabled => {
  return isDisabled
    ? css`
        cursor: not-allowed;
        border-color: var(--c-light);
      `
    : ``;
};

export const inject = { inputContainerDisabledStyles, fileInputColorToggle, fileInputWrapperDisabledStyles };

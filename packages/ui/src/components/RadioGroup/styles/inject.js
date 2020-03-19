import { css } from 'styled-components';
import { Mixin } from '../../../theme';

const labelDirection = isReversed => `flex-direction: ${isReversed ? 'row-reverse' : 'row'}`;

const labelDisabledStyles = ({ isDisabled, RadioButton }) => {
  return isDisabled
    ? css`
        color: var(--c-neutral);
        cursor: not-allowed;

        ${Mixin.Device.desktop(css`
          &:hover {
            ${RadioButton} {
              box-shadow: none;
            }
          }

          &:active {
            ${RadioButton} {
              &:after {
                background-color: var(--c-lightest);
              }
            }
          }
        `)};

        ${Mixin.Device.mobile(css`
          &:active {
            ${RadioButton} {
              &:after {
                background-color: var(--c-lightest);
              }
            }
          }
        `)};
      `
    : '';
};

const radioButtonMargin = isReversed => (isReversed ? 'var(--i-regular)' : '0');

export const inject = { labelDirection, labelDisabledStyles, radioButtonMargin };

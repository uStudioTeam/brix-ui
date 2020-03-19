import { css } from 'styled-components';
import { Mixin } from '../../../theme';

const nativeThumbStyles = style => {
  return css`
    &::-webkit-slider-thumb {
      appearance: none;
      ${style};
    }

    &::-moz-range-thumb {
      ${style};
    }
  `;
};

const nativeThumbDisabledStyles = isDisabled => {
  return isDisabled
    ? css`
        background: var(--c-neutral);
        cursor: not-allowed;

        &:active {
          background-position-y: 0;
        }
      `
    : css`
        background: var(--g-primary) no-repeat, var(--c-primary-light);
        cursor: pointer;

        &:active {
          background-position-y: -0.75rem;
        }

        ${Mixin.Device.mobile(css`
          &:active {
            box-shadow: var(--s-primary);
          }
        `)}

        ${Mixin.Device.desktop(css`
          &:hover,
          &:focus {
            box-shadow: var(--s-primary);
          }
        `)}
      `;
};

const nativeTrackStyles = style => {
  return css`
    &::-webkit-slider-runnable-track {
      ${style};
    }

    &::-moz-range-track {
      ${style};
    }
  `;
};

const containerDisabledStyles = isDisabled => {
  return isDisabled
    ? css`
        cursor: not-allowed;
        color: var(--c-neutral);
      `
    : ``;
};

const helperDisabledStyles = ({ isDisabled, Line, Step, StepContainer }) => {
  return isDisabled
    ? css`
        ${Line} {
          background-color: var(--c-neutral);
        }

        ${StepContainer} {
          ${Step} {
            background-color: var(--c-neutral);

            &:before {
              color: var(--c-neutral);
            }
          }
        }
      `
    : ``;
};

const stepDisplayStyles = dataDisplay => {
  return !dataDisplay
    ? css`
        height: 1px;
        outline: none;

        &:before {
          visibility: hidden;
        }
      `
    : ``;
};

const stepLabelStyles = ({ dataLabel, isActive, style }) => {
  return dataLabel
    ? css`
          &:before {
            ${Mixin.Font.caption()};
            
            content: '${dataLabel}';
            
            color: ${isActive ? 'var(--c-dark)' : 'var(--c-neutral)'};

            position: absolute;
            top: var(--i-medium);
            left: ${`calc(${style.left} + 0.5px)`};
            
            transform: translateX(-50%);
            transition: var(--transition);
          }
        `
    : '';
};

export const inject = {
  containerDisabledStyles,
  nativeThumbDisabledStyles,
  nativeThumbStyles,
  nativeTrackStyles,
  helperDisabledStyles,
  stepDisplayStyles,
  stepLabelStyles,
};

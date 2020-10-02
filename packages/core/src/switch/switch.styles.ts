import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { hidden, shadow, size } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';

import type { SwitchProps } from './switch.props';

type Props = Pick<SwitchProps, 'value' | 'isDisabled' | 'isInvalid'>;

const Input = styled.input`
  ${hidden};
`;

const start = css`calc(var(--horizontal-padding) + var(--border-width) + var(--thumb-indent))`;
const end = css`
  calc(50% + var(--thumb-indent) + var(--border-width));
`;

const Children = styled.span<Pick<SwitchProps, 'value' | 'isDisabled' | 'isInvalid'>>(
  ({ value, isDisabled, isInvalid }) => css`
    position: absolute;
    top: 50%;

    ${size('12px')};

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate(0, -50%);

    user-select: none;

    transition: all var(--transition-short);

    ${value
      ? // Checked
        css`
          left: ${start};

          ${isDisabled &&
          css`
            color: var(--c-faint-strong-down);
          `}
        `
      : // Unchecked
        css`
          left: ${end};

          ${isInvalid &&
          css`
            color: var(--c-critical-strong);
          `}

          ${isDisabled &&
          css`
            color: var(--c-faint-strong-down);
          `}
        `}
  `
);

const shapeColor = (color: string): FlattenSimpleInterpolation => {
  return css`
    background-color: var(--c-${color});
    border-color: var(--c-${color});
  `;
};

const Track = ({ value, isDisabled, isInvalid }: Props): FlattenSimpleInterpolation => {
  return css`
    &:before {
      content: '';

      position: absolute;
      top: 50%;
      left: 50%;

      height: var(--track-height);
      width: var(--track-width);

      border-radius: calc(var(--track-height) / 2);
      border-width: var(--border-width);
      border-style: solid;

      transform: translate(-50%, -50%);

      transition: all var(--transition-short);

      ${value
        ? // Checked
          css`
            background-color: var(--c-accent-strong);
            border-color: var(--c-accent-strong);

            ${isInvalid &&
            css`
              ${shapeColor('critical-strong')};
            `}

            ${isDisabled &&
            css`
              ${shapeColor('faint-weak-up')};
            `}
          `
        : // Unchecked
          css`
            background-color: var(--c-base-weak);
            border-color: var(--c-accent-strong);

            ${isInvalid &&
            css`
              border-color: var(--c-critical-strong);
            `}

            ${isDisabled &&
            css`
              background-color: var(--c-faint-weak);
              border-color: var(--c-faint-weak-up);
            `}
          `}
    }
  `;
};

const Thumb = ({ value, isDisabled, isInvalid }: Props): FlattenSimpleInterpolation => {
  return css`
    &:after {
      content: '';

      position: absolute;
      top: calc(var(--vertical-padding) + var(--border-width) + var(--thumb-indent));

      ${size('var(--thumb-size)')};

      border-radius: calc(var(--thumb-size) / 2);

      transition: all var(--transition-short);

      ${value
        ? // Checked
          css`
            left: ${end};

            background-color: var(--c-text-base-weak);

            ${isDisabled &&
            css`
              background-color: var(--c-faint-strong-down);
            `}
          `
        : // Unchecked
          css`
            left: ${start};

            background-color: var(--c-accent-strong);

            ${isInvalid &&
            css`
              background-color: var(--c-critical-strong);
            `}

            ${isDisabled &&
            css`
              background-color: var(--faint-weak);
            `}
          `}
    }
  `;
};

const Switch = styled.label<Props>(({ value, isDisabled, isInvalid }) => {
  return css`
    --track-height: 16px;
    --track-width: 32px;

    --thumb-size: 12px;
    --thumb-scale: 4px;

    --vertical-padding: calc(var(--track-height) / 2);
    --horizontal-padding: calc(var(--vertical-padding) * 0.75);

    --border-width: 1px;
    --thumb-indent: 1px;

    position: relative;

    height: calc(var(--track-height) + var(--vertical-padding) * 2);
    width: calc(var(--track-width) + var(--horizontal-padding) * 2);

    display: inline-block;

    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

    ${Track({ value, isDisabled, isInvalid })}
    ${Thumb({ value, isDisabled, isInvalid })}

    &:active {
      transform: scale(0.975);

      &:after {
        width: calc(var(--thumb-size) + var(--thumb-scale));
      }
    }

    ${value
      ? // Checked
        css`
          ${Children} {
            color: var(--c-text-base-weak);
          }

          &:hover {
            &:before {
              box-shadow: ${shadow('accent-strong', 0.25)};
            }
          }

          &:active {
            &:after {
              transform: translateX(-4px);
            }
          }

          &:active,
          &:focus-within {
            &:before {
              ${shapeColor('accent-strong-down')};
            }
          }

          ${isDisabled &&
          css`
            &:hover {
              &:before {
                box-shadow: none;
              }
            }

            &:active {
              transform: scale(1);

              &:after {
                width: var(--thumb-size);

                transform: translateX(0);
              }
            }

            &:active,
            &:focus-within {
              &:before {
                ${shapeColor('faint-weak-up')};
              }
            }
          `}

          ${isInvalid &&
          css`
            &:hover {
              &:before {
                box-shadow: ${shadow('critical-strong', 0.25)};
              }
            }

            &:active,
            &:focus-within {
              &:before {
                ${shapeColor('critical-weak-up')};
              }
            }
          `}
        `
      : // Unchecked
        css`
          ${Children} {
            color: var(--c-accent-strong);
          }

          &:hover {
            &:before {
              box-shadow: ${shadow('base-strong', 0.1)};
            }
          }

          &:active,
          &:focus-within {
            &:before {
              border-color: var(--c-accent-strong-down);
            }

            &:after {
              background-color: var(--c-accent-strong-down);
            }
          }

          ${isInvalid &&
          css`
            &:hover {
              &:before {
                box-shadow: ${shadow('critical-strong', 0.25)};
              }
            }

            &:active,
            &:focus-within {
              &:before {
                border-color: var(--c-critical-weak-up);
              }

              &:after {
                background-color: var(--c-critical-weak-up);
              }
            }
          `}

          ${isDisabled &&
          css`
            &:hover {
              &:before {
                box-shadow: none;
              }
            }

            &:active {
              transform: scale(1);

              &:after {
                width: var(--thumb-size);
              }
            }

            &,
            &:active,
            &:focus-within {
              &:before {
                border-color: var(--c-faint-weak-up);
              }

              &:after {
                background-color: var(--c-faint-weak-up);
              }
            }
          `}
        `}
  `;
});

const Styled = applyDisplayNames({ Switch, Input, Children });

export default Styled;

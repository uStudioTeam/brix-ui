import Text from '../Text';
import styled, { css } from 'styled-components';
import { Mixin } from '../../theme';

function thumb({ disabled }) {
  return css`
    position: relative;

    width: 0.75rem;
    height: 0.75rem;
    border-radius: 0.75rem;

    transition: var(--transition);

    ${disabled
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
        `}
  `;
}

const Container = styled.div.withConfig({ displayName: 'SliderContainer' })(
  ({ isDisabled }) => css`
    display: grid;
    grid-auto-flow: column;
    grid-gap: var(--i-regular);
    align-items: center;

    height: 1.375rem;

    ${isDisabled
      ? css`
          cursor: not-allowed;
          color: var(--c-neutral);
        `
      : ''}
  `
);

const InputContainer = styled.div.withConfig({ displayName: 'SliderInputContainer' })`
  position: relative;

  width: 100%;
  height: 12px;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Input = styled.input.withConfig({ displayName: 'SliderContainer' })(
  ({ disabled }) => css`
    appearance: none;
    width: 100%;
    height: 1px;
    padding: 6px 0;
    border-radius: 1px;

    cursor: pointer;

    background: linear-gradient(
      to bottom,
      transparent calc(50% - 0.5px),
      var(--c-neutral) calc(50% - 0.5px),
      var(--c-neutral) calc(50% + 0.5px),
      transparent calc(50% + 0.5px),
      transparent
    );

    ${Mixin.Device.mobile(css`
      &:active {
        &::-webkit-slider-thumb {
          background-position-y: -0.75rem;
          box-shadow: var(--s-primary);
        }

        &::-moz-range-thumb {
          background-position-y: -0.75rem;
          box-shadow: var(--s-primary);
        }
      }
    `)}

    ${Mixin.Device.desktop(css`
      &:hover,
      &:focus {
        &::-webkit-slider-thumb {
          box-shadow: var(--s-primary);
        }

        &::-moz-range-thumb {
          box-shadow: var(--s-primary);
        }
      }

      &:active {
        &::-webkit-slider-thumb {
          background-position-y: -0.75rem;
        }

        &::-moz-range-thumb {
          background-position-y: -0.75rem;
        }
      }
    `)}

    &::-webkit-slider-runnable-track {
      position: relative;
    }

    &::-moz-range-track {
      position: relative;
    }

    &[disabled] {
      cursor: not-allowed;

      &:hover {
        &::-webkit-slider-thumb {
          box-shadow: none;
        }

        &::-moz-range-thumb {
          box-shadow: none;
        }
      }

      &:active,
      &:focus {
        pointer-events: none;
      }
    }

    &::-webkit-slider-thumb {
      appearance: none;

      ${thumb({ disabled })};
    }

    &::-moz-range-thumb {
      ${thumb({ disabled })};
    }
  `
);

const Value = styled(Text).withConfig({ displayName: 'SliderValue' })`
  display: flex;
  justify-content: flex-start;

  width: 2rem;
  overflow-x: visible;

  text-align: center;
  user-select: none;
`;

const HelperContainer = styled.div.withConfig({ displayName: 'SliderHelperContainer' })`
  position: absolute;

  display: flex;
  align-items: center;

  width: 100%;
`;

const Helper = styled.div.withConfig({ displayName: 'SliderHelper' })(
  ({ isDisabled }) => css`
    position: relative;

    width: 100%;

    ${isDisabled
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
      : ''}
  `
);

const Line = styled.div.withConfig({ displayName: 'SliderLine' })`
  height: 1px;

  position: absolute;
  top: 50%;
  left: 0;

  transform: translateY(-50%);

  background-color: var(--c-primary);
`;

const StepContainer = styled.div.withConfig({ displayName: 'SliderStepContainer' })`
  position: relative;

  left: 5px;

  width: calc(100% - 12px);
  height: 12px;
`;

const Step = styled.span.withConfig({ displayName: 'SliderStep' })(
  ({ isActive, dataLabel, dataDisplay, style }) => css`
    height: 4px;
    width: 1px;

    background-color: ${isActive ? 'var(--c-primary)' : 'var(--c-neutral)'};
    outline: 1px solid var(--c-lightest);

    position: absolute;
    top: 50%;

    transform: translateY(-50%);

    &:first-child,
    &:last-child {
      height: 1px;
      outline: none;

      &:before {
        top: 6px;
      }
    }

    ${!dataDisplay
      ? css`
          height: 1px;
          outline: none;

          &:before {
            visibility: hidden;
          }
        `
      : ''};

    ${dataLabel
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
      : ''};
  `
);

export const Styled = {
  Container,
  HelperContainer,
  Helper,
  InputContainer,
  Input,
  Line,
  Value,
  Step,
  StepContainer,
};

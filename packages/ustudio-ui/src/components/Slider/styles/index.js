import styled, { css } from 'styled-components';
import { StyledComponents } from '../../../utils/styles/styled-components';

import Text from '../../Text';
import { Mixin } from '../../../theme';
import { inject } from './inject';

const SliderContainer = styled.div(
  ({ isDisabled }) => css`
    display: flex;
    align-items: center;

    width: 100%;
    height: 1.375rem;

    ${inject.containerDisabledStyles(isDisabled)};
  `
);

const InputContainer = styled.div`
  position: relative;

  width: 100%;
  height: 12px;

  flex: 1;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Input = styled.input(
  ({ disabled }) => css`
    appearance: none;
    width: 100%;
    height: 1px;
    padding: 6px 0;
    border-radius: 1px;

    cursor: pointer;

    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) calc(50% - 0.5px),
      var(--c-neutral) calc(50% - 0.5px),
      var(--c-neutral) calc(50% + 0.5px),
      rgba(255, 255, 255, 0) calc(50% + 0.5px),
      rgba(255, 255, 255, 0)
    );

    ${Mixin.Device.mobile(css`
      &:active {
        ${inject.nativeThumbStyles(css`
          background-position-y: -0.75rem;
          box-shadow: var(--s-primary);
        `)}
      }
    `)}

    ${Mixin.Device.desktop(css`
      &:hover,
      &:focus {
        ${inject.nativeThumbStyles(
          css`
            box-shadow: var(--s-primary);
          `
        )}
      }

      &:active {
        ${inject.nativeThumbStyles(
          css`
            background-position-y: -0.75rem;
          `
        )}
      }
    `)}

    ${inject.nativeTrackStyles(
      css`
        position: relative;
      `
    )};

    &[disabled] {
      cursor: not-allowed;

      &:hover {
        ${inject.nativeThumbStyles(
          css`
            box-shadow: none;
          `
        )};
      }

      &:active,
      &:focus {
        pointer-events: none;
      }
    }
    
    ${inject.nativeThumbStyles(css`
      appearance: none;

      position: relative;

      width: 0.75rem;
      height: 0.75rem;
      border-radius: 0.75rem;

      transition: var(--transition);

      ${inject.nativeThumbDisabledStyles(disabled)};
    `)}
  `
);

const Value = styled(Text)`
  display: flex;
  justify-content: flex-start;

  width: 2rem;
  margin-left: var(--i-regular);

  overflow-x: visible;

  text-align: center;
  user-select: none;
`;

const HelperContainer = styled.div`
  position: absolute;

  display: flex;
  align-items: center;

  width: 100%;
`;

const Helper = styled.div(
  ({ isDisabled }) => css`
    position: relative;

    width: 100%;

    ${inject.helperDisabledStyles({ isDisabled, Line, Step, StepContainer })};
  `
);

const Line = styled.div`
  height: 1px;

  position: absolute;
  top: 50%;
  left: 0;

  transform: translateY(-50%);

  background-color: var(--c-primary);
`;

const StepContainer = styled.div`
  position: relative;

  left: 5px;

  width: calc(100% - 12px);
  height: 12px;
`;

const Step = styled.span(
  ({ isActive, dataLabel, dataDisplay, style }) => css`
    height: 4px;
    width: 1px;

    background-color: ${inject.stepBackgroundToggle(isActive)};
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

    ${inject.stepDisplayStyles(dataDisplay)};

    ${inject.stepLabelStyles({ dataLabel, isActive, style })};
  `
);

export const Styled = StyledComponents({
  SliderContainer,
  HelperContainer,
  Helper,
  InputContainer,
  Input,
  Line,
  Value,
  Step,
  StepContainer,
});

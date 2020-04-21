import styled, { css } from 'styled-components';

import { reverseDirection } from '../../../utils';
import { Mixin } from '../../../theme';
import { StyledComponents } from '../../../utils/styles/styled-components';
import { inject } from './inject';

const RadioGroup = styled.ul(
  ({ dataDirection }) => css`
    flex: 1;
    display: grid;
    grid-auto-flow: ${reverseDirection(dataDirection)};
    grid-gap: var(--i-regular);
  `
);

const RadioGroupItem = styled.li`
  position: relative;

  display: flex;
  align-items: center;
`;

const Label = styled.label(
  ({ isDisabled, isReversed }) => css`
    ${Mixin.Font.bodyRegular()};

    height: var(--i-regular);

    display: flex;

    ${inject.labelDirection(isReversed)};

    align-items: center;

    cursor: pointer;

    ${RadioButton} {
      margin-right: ${inject.radioButtonMargin(!isReversed)};
      margin-left: ${inject.radioButtonMargin(isReversed)};
    }

    ${inject.labelDisabledStyles({ isDisabled, RadioButton })}
  `
);

const RadioButton = styled.span`
  ${Mixin.Style.borderAll({ color: 'var(--c-primary)' })};

  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--i-regular);
  height: var(--i-regular);
  border-radius: 50%;
  margin-top: 2px;

  background-color: var(--c-lightest);

  cursor: pointer;

  transition: var(--transition);

  &:after {
    content: '';

    width: var(--i-medium);
    height: var(--i-medium);
    border-radius: 50%;

    background-color: var(--c-lightest);

    transition: var(--transition);
  }
`;

const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  ${Mixin.Device.mobile(css`
    &:not([disabled]):active + ${RadioButton} {
      &:after {
        background-color: var(--c-primary);
      }
    }

    &[checked]:active + ${RadioButton} {
      background-color: var(--c-primary-light);
    }
  `)}

  ${Mixin.Device.desktop(css`
    &:not([disabled]):focus + ${RadioButton}, &:not([disabled]):hover + ${RadioButton} {
      box-shadow: var(--s-primary);
    }

    &:not([disabled]) + &:active + ${RadioButton} {
      &:after {
        background-color: var(--c-primary);
      }
    }

    &[checked]:focus + ${RadioButton}, &[checked]:active + ${RadioButton} {
      background-color: var(--c-primary-light);
    }
  `)}

  &[checked] + ${RadioButton} {
    background-color: var(--c-primary);
  }

  &[disabled] + ${RadioButton} {
    cursor: not-allowed;
    border-color: var(--c-neutral);
  }

  &[checked][disabled] + ${RadioButton} {
    background-color: var(--c-light);
    border-color: var(--c-light);

    &:after {
      background-color: var(--c-neutral);
    }

    ${Mixin.Device.mobile(css`
      &:active {
        &:after {
          background-color: var(--c-neutral);
        }
      }
    `)}

    ${Mixin.Device.desktop(css`
      &:hover {
        box-shadow: none;
      }

      &:active {
        &:after {
          background-color: var(--c-neutral);
        }
      }
    `)}
  }
`;

export const Styled = StyledComponents({ RadioGroup, RadioGroupItem, Label, RadioButton, Input });

import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { shadow } from '@brix-ui/theme/mixin';

import Button from '../button';
import Text from '../text';

import type { TimePickerProps } from './time-picker.props';

const ModeSwitch = styled(Button)`
  width: 28px;
  height: 26px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--c-faint-strong-up);

  border: none;

  &:hover {
    box-shadow: none;
  }
`;

const Mode = styled(Text).attrs(() => ({
  forwardedAs: 'span',
}))``;

const TimePicker = styled.div<TimePickerProps>(
  ({ isDisabled, isInvalid }) => css`
    height: 28px;
    width: auto;

    display: inline-flex;

    color: var(--c-base-strong);
    background-color: var(--c-base-weak);

    border-width: 1px;
    border-style: solid;
    border-color: var(--c-faint-strong-down);
    border-radius: 2px;

    transition: all var(--transition-short);

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
    }

    &:focus-within {
      border-color: var(--c-accent-strong);
    }

    ${isInvalid &&
    css`
      border-color: var(--c-critical-strong);

      &:focus-within {
        border-color: var(--c-critical-weak-up);
      }
    `};

    ${isDisabled &&
    css`
      color: var(--c-faint-strong-down);
      background-color: var(--c-faint-weak-down);
      border-color: var(--c-faint-weak-up);

      cursor: not-allowed;

      &:hover {
        box-shadow: none;
      }

      ${ModeSwitch} {
        color: var(--c-faint-strong-down);
        background-color: var(--c-faint-weak);
      }
    `}
  `
);

const InputsContainer = styled.div`
  height: 28px;

  padding: 2px 0 4px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  & > label {
    height: 26px;
  }
`;

const Divider = styled(Text).attrs(() => ({
  forwardedAs: 'span',
}))`
  margin-top: -4px;

  color: var(--c-faint-strong-down);
`;

const Styled = applyDisplayNames({ TimePicker, InputsContainer, ModeSwitch, Mode, Divider });

export default Styled;

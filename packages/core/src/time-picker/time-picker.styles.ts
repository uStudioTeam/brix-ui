import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { shadow } from '@brix-ui/theme/mixin';

import Button from '../button';
import Text from '../text';

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

const TimePicker = styled.div(
  () => css`
    height: var(--input-height-large);
    width: auto;

    display: inline-flex;

    color: var(--c-base-strong);
    background-color: var(--input-background-color);

    border-width: 1px;
    border-style: solid;
    border-color: var(--input-border-color);
    border-radius: var(--input-border-radius);

    transition: all var(--transition-short);

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
    }

    &:focus-within {
      border-color: var(--input-border-color-focus);
    }

    &[aria-invalid] {
      border-color: var(--input-border-color-invalid);

      &:focus-within {
        border-color: var(--input-border-color-invalid-focus);
      }
    }

    &[aria-disabled] {
      color: var(--input-color-disabled);
      background-color: var(--input-background-color-disabled);
      border-color: var(--input-border-color-disabled);

      cursor: not-allowed;

      &:hover {
        box-shadow: none;
      }

      ${ModeSwitch} {
        color: var(--input-placeholder-color);
        background-color: var(--c-faint-weak);
      }
    }
  `
);

const InputsContainer = styled.div`
  height: var(--input-height-large);

  padding: 2px 0 4px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  & > label {
    height: calc(var(--input-height-large) - 2px);
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

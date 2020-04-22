import { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { sc } from '../../../utils';

import { inject } from './inject.js';

const CheckboxContainer = sc('span')(
  ({ isDisabled }) => css`
    display: flex;
    align-items: center;

    width: var(--i-regular);
    height: var(--i-regular);

    cursor: pointer;
    user-select: none;

    position: relative;

    ${inject.disabledStyles(isDisabled)}
  `
)('CheckboxContainer');

const Checkbox = sc('span')(css`
  overflow: hidden;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--c-lightest);
  background: var(--g-primary) no-repeat, var(--c-lightest);
  background-position: -14px;
  border-radius: var(--border-radius);
  ${Mixin.Style.borderAll({ color: 'var(--c-primary)' })};

  transition: var(--transition);
`)('Checkbox');

const Input = sc('input')(css`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;

  &:not([readOnly]) {
    cursor: pointer;
  }

  &[readOnly] {
    cursor: not-allowed;

    &:active,
    &:focus {
      cursor: not-allowed;
    }
  }
  
  &[checked] + ${Checkbox} {
    background-position: 0;
  }
  
  &[checked] + ${Checkbox}:active {
      color: var(--c-primary);
      box-shadow: var(--s-primary);
    }
    
    ${Mixin.Device.mobile(css`
      &:not([readOnly]):active + ${Checkbox} {
        color: var(--c-primary);
        box-shadow: var(--s-primary);
      }
    `)}
  
  ${Mixin.Device.desktop(css`
    &:active + ${Checkbox} {
      color: var(--c-primary);
    }

    &:not([readOnly]):focus
      + ${Checkbox},
      &:not([readOnly]):hover
      + ${Checkbox},
      &:not([readOnly])[checked]:hover
      + ${Checkbox} {
      box-shadow: var(--s-primary);
    }
  `)}

  &[readOnly] + ${Checkbox} {
    color: var(--c-lightest);
  }

  &[checked][readOnly] + ${Checkbox} {
    cursor: not-allowed;
    color: var(--c-neutral);
    border-color: var(--c-light);
    background: var(--c-light);
  }

  &[readOnly] + ${Checkbox} {
    cursor: not-allowed;
    color: var(--c-lightest);
    border-color: var(--c-neutral);
    background: var(--c-lightest);
  }
`)('Input');

export const Styled = { CheckboxContainer, Input, Checkbox };

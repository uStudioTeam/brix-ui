import styled, { css } from 'styled-components';
import { Mixin } from '../../theme';

const Container = styled.span.withConfig({ displayName: 'Container' })(
  ({ isDisabled }) => css`
    display: flex;
    align-items: center;

    width: var(--i-regular);
    height: var(--i-regular);

    cursor: pointer;
    user-select: none;

    position: relative;

    ${isDisabled
      ? css`
          color: var(--c-neutral);
          cursor: not-allowed;

          &:active,
          &:focus {
            pointer-events: none;
          }
        `
      : ''};
  `
);

const Checkbox = styled.span.withConfig({ displayName: 'Checkbox' })`
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
`;

const Input = styled.input.withConfig({ displayName: 'Input' })`
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
`;

export const Styled = { Container, Input, Checkbox };

import { css } from 'styled-components';

export function disabledElement(isDisabled) {
  return isDisabled
    ? css`
        background: var(--c-light);
        color: var(--c-neutral);
        cursor: not-allowed;
      `
    : '';
}

import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { shadow, font } from '@brix-ui/theme/mixin';

const Input = styled.input(
  () => css`
    -webkit-appearance: none;
    -moz-appearance: textfield;

    width: 100%;

    &::placeholder {
      color: var(--c-faint-strong-down);
      opacity: 1;

      transition: opacity var(--transition-short);
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `
);

const Container = styled.label(
  () => css`
    --affix-indent: 8px;

    height: 28px;
    width: 100%;

    padding: 2px 8px 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--c-base-strong);
    background-color: var(--c-base-weak);

    border: 1px solid var(--c-faint-strong-down);
    border-radius: 2px;

    ${font.body.p};

    cursor: text;

    transition: all var(--transition-short);

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
    }

    &:focus-within {
      border-color: var(--c-accent-strong);
    }

    &[aria-readonly] {
      color: var(--c-faint-strong-up);
      border-color: var(--c-faint-weak-up);

      ${Input}::placeholder {
        opacity: 1;
      }
    }

    &[aria-invalid] {
      border-color: var(--c-critical-strong);

      &:focus-within {
        border-color: var(--c-critical-weak-up);
      }
    }

    &[aria-disabled] {
      color: var(--c-faint-strong-down);
      background-color: var(--c-faint-weak-down);
      border-color: var(--c-faint-weak-up);

      cursor: not-allowed;

      &:hover {
        box-shadow: none;
      }

      ${Input}::placeholder {
        color: var(--c-faint-weak-up);
      }
    }
  `
);

const Styled = applyDisplayNames({ Container, Input });

export default Styled;

import styled, { css } from 'styled-components';

import { applyDisplayNames, createCustomProperties } from '@brix-ui/utils/functions';
import { shadow, font } from '@brix-ui/theme/mixin';
import { InputProps } from './input.props';

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

const Container = styled.label<Pick<InputProps<any>, 'customProperties'>>(
  ({ customProperties }) => css`
    ${createCustomProperties(customProperties, {
      affixIndent: '8px',
    })};

    height: var(--input-height-large);
    width: 100%;

    padding: 2px 8px 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--input-color);
    background-color: var(--input-background-color);

    border: 1px solid var(--input-border-color);
    border-radius: var(--input-border-radius);

    ${font.body.p};

    cursor: text;

    transition: all var(--transition-short);

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
    }

    &:focus-within {
      border-color: var(--input-border-color-focus);
    }

    &[aria-readonly] {
      color: var(--c-faint-strong-up);
      border-color: var(--c-faint-weak-up);

      ${Input}::placeholder {
        opacity: 1;
      }
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

      ${Input}::placeholder {
        color: var(--input-placeholder-color-disabled);
      }
    }
  `
);

const Styled = applyDisplayNames({ Container, Input });

export default Styled;

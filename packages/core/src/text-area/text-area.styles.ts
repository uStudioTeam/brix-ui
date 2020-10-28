import styled, { css } from 'styled-components';

import { font, shadow, size, transition } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';
import Text from '../text';

import type { TextAreaProps } from './text-area.props';

const Label = styled.label`
  position: relative;

  ${size('fit-content')};

  display: inline-block;
`;

const SymbolsLeft = styled(Text).attrs(() => ({
  forwardedAs: 'span',
  variant: 'small',
}))`
  position: absolute;
  right: 1px;
  bottom: 1px;

  padding: 2px 6px 4px;

  color: var(--c-faint-strong-up);
  background-color: var(--c-base-weak);
  border-radius: var(--input-border-radius);

  transition: ${transition('var(--transition-short)', 'color', 'background-color')};

  &[data-resize] {
    right: 14px;
  }
`;

const validity = (state: 'valid' | 'invalid') => css`
  border-color: var(--input-border-color-${state});

  &:focus-within {
    border-color: var(--input-border-color-${state}-focus);
  }

  &:hover {
    box-shadow: ${shadow(`${state === 'valid' ? 'success' : 'critical'}-strong`, 0.25)};
  }
`;

const TextArea = styled.textarea<{ resize: TextAreaProps['resize'] }>(
  ({ resize }) => css`
    ${size('100%')};
    -moz-appearance: textfield;

    min-height: var(--input-height-large);

    padding: 2px 8px 4px;

    display: block;

    color: var(--input-color);
    background-color: var(--input-background-color);

    border: 1px solid var(--input-border-color);
    border-radius: var(--input-border-radius);

    resize: ${resize ?? 'none'};

    ${font.body.p};

    cursor: text;

    transition: ${transition('var(--transition-short)', 'box-shadow', 'border-color', 'color', 'background-color')};

    &::placeholder {
      color: var(--input-placeholder-color);
      opacity: 1;

      transition: ${transition('var(--transition-short)', 'opacity', 'color')};
    }

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
    }

    &:focus-within {
      border-color: var(--input-border-color-focus);
    }

    &[aria-readonly] {
      color: var(--c-faint-strong-up);
      border-color: var(--c-faint-weak-up);

      &::placeholder {
        opacity: 1;
      }
    }

    &[aria-invalid='true'] {
      ${validity('invalid')};
    }

    &[aria-invalid='false'] {
      ${validity('valid')};
    }

    &[aria-disabled] {
      border-color: var(--input-border-color-disabled);

      &:hover {
        box-shadow: none;
      }

      &::placeholder {
        color: var(--input-placeholder-color-disabled);
      }

      &,
      & + ${SymbolsLeft} {
        color: var(--input-color-disabled);
        background-color: var(--input-background-color-disabled);

        cursor: not-allowed;
      }
    }
  `
);

const Styled = applyDisplayNames({ Label, TextArea, SymbolsLeft });

export default Styled;

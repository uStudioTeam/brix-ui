import styled, { css } from 'styled-components';

import { font } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';

const Input = styled.select(
  () => css`
    appearance: none;

    width: 100%;
    height: 28px;

    padding: 2px 0 4px;

    display: inline-block;

    transition: all var(--transition-short);

    cursor: pointer;

    color: inherit;
    border: none;
    background: none;
    font: inherit;
    opacity: 1;
  `
);

const Dropdown = styled.label(
  () => css`
    position: relative;

    width: 100%;
    height: var(--input-height-large);

    padding: 4px 8px;

    display: flex;
    align-items: center;

    color: var(--input-placeholder-color);
    background-color: var(--input-background-color);

    ${font.body.p};

    transition: all var(--transition-short);

    &:hover {
      cursor: pointer;
    }

    &[data-has-value],
    &[data-has-value] ${Input} {
      color: var(--input-color);
    }

    &[aria-disabled] {
      background-color: var(--input-background-color-disabled);

      cursor: not-allowed;

      &,
      ${Input} {
        color: var(--input-placeholder-color-disabled);
      }

      &[data-has-value] {
        &,
        ${Input} {
          color: var(--input-color-disabled);
        }
      }
    }
  `
);

const Styled = applyDisplayNames({ Input, Dropdown });

export default Styled;

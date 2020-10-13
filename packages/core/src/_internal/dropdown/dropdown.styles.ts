import styled, { css } from 'styled-components';

import { font } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';

import type { SelectProps } from '../../select';

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

const Dropdown = styled.label<Pick<SelectProps, 'isInvalid' | 'isDisabled'> & { hasValue: boolean }>(
  ({ isDisabled, hasValue }) => css`
    position: relative;

    width: 100%;
    height: 28px;

    padding: 4px 8px;

    display: flex;
    align-items: center;

    color: ${hasValue ? 'var(--c-base-strong)' : 'var(--c-faint-strong-down)'};
    background-color: var(--c-base-weak);

    ${font.body.p};

    transition: all var(--transition-short);

    &:hover {
      cursor: pointer;
    }

    ${isDisabled &&
    css`
      color: var(--c-faint-strong-down);
      background-color: var(--c-faint-weak-down);

      ${Input} {
        color: ${hasValue ? 'var(--c-faint-strong-down)' : 'var(--c-faint-weak-up)'};
      }
    `}
  `
);

const Styled = applyDisplayNames({ Input, Dropdown });

export default Styled;

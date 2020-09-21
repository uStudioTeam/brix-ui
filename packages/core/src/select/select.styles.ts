import styled, { css } from 'styled-components';

import { font, shadow } from '@ustudio-ui/theme/mixin';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import Chevron from '../../assets/icons/chevron.inline.svg';

import type { SelectProps } from './select.props';

export const Select = styled.label(
  () => css`
    position: relative;

    height: 28px;
  `
);

export const Icon = styled(Chevron)(
  () => css`
    width: 10px;
    height: 10px;

    position: absolute;
    top: 50%;
    right: 8px;

    cursor: pointer;

    transform: translateY(-50%);

    transition: all 200ms;
  `
);

const Input = styled.select<Pick<SelectProps, 'isInvalid'> & { hasValue: boolean }>(
  ({ isInvalid, hasValue }) => css`
    appearance: none;

    width: 100%;
    height: 28px;

    padding: 2px 8px 4px;

    display: inline-block;

    color: ${hasValue ? 'var(--c-base-strong)' : 'var(--c-faint-strong)'};
    background-color: var(--c-base-weak);

    border: 1px solid var(--c-faint-strong-down);
    border-radius: 2px;

    ${font.body.p};

    transition: all 200ms;

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};

      cursor: pointer;
    }

    &:focus {
      border-color: var(--c-accent-strong);
    }

    ${isInvalid &&
    css`
      border-color: var(--c-critical-strong);

      &:focus {
        border-color: var(--c-critical-weak-up);
      }
    `}

    &:disabled {
      color: var(--c-faint-strong-down);
      background-color: var(--c-faint-weak-down);
      border-color: var(--c-faint-weak-up);

      &:hover {
        box-shadow: none;
      }
    }
  `
);

const Styled = applyDisplayNames({ Select, Input, Icon });

export default Styled;

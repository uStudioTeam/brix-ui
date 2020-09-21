import styled, { css } from 'styled-components';

import { font, shadow } from '@ustudio-ui/theme/mixin';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import Chevron from '../../assets/icons/chevron.inline.svg';

import type { SelectProps } from './select.props';

export const Icon = styled(Chevron)(
  () => css`
    width: 10px;
    height: 10px;

    cursor: pointer;

    transition: all 200ms;
  `
);

const Input = styled.select(
  () => css`
    appearance: none;

    width: 100%;
    height: 28px;

    padding: 2px 0 4px;

    display: inline-block;

    transition: all 200ms;

    cursor: pointer;

    border: none;
    background: none;
    font: inherit;
    opacity: 1;
  `
);

export const Select = styled.label<Pick<SelectProps, 'isInvalid' | 'isDisabled'> & { hasValue: boolean }>(
  ({ isInvalid, isDisabled, hasValue }) => css`
    position: relative;

    width: 100%;
    height: 28px;

    padding: 4px 8px;

    display: flex;
    align-items: center;

    background-color: var(--c-base-weak);

    border: 1px solid var(--c-faint-strong-down);
    border-radius: 2px;

    ${font.body.p};

    transition: all 200ms;

    ${Input} {
      color: ${hasValue ? 'var(--c-base-strong)' : 'var(--c-faint-strong)'};
    }

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};

      cursor: pointer;
    }

    &:focus-within {
      border-color: var(--c-accent-strong);
    }

    ${isInvalid &&
    css`
      border-color: var(--c-critical-strong);

      &:focus-within {
        border-color: var(--c-critical-weak-up);
      }
    `}

    ${isDisabled &&
    css`
      background-color: var(--c-faint-weak-down);
      border-color: var(--c-faint-weak-up);

      & {
        color: var(--c-faint-strong-down);
      }

      ${Input} {
        color: ${hasValue ? 'var(--c-faint-strong-down)' : 'var(--c-faint-weak-up)'};
      }

      &:hover {
        box-shadow: none;
      }
    `}
  `
);

const Styled = applyDisplayNames({ Select, Input, Icon });

export default Styled;

import styled, { css } from 'styled-components';

import { shadow } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';
import Chevron from '@brix-ui/icons/chevron';

import DropdownStyles from '../_internal/dropdown/dropdown.styles';

import type { SelectProps } from './select.props';

export const Icon = styled(Chevron)(
  () => css`
    width: 10px;
    height: 10px;

    cursor: pointer;

    transition: all var(--transition-short);
  `
);

const { Input } = DropdownStyles;

export const Select = styled(DropdownStyles.Dropdown)<
  Pick<SelectProps, 'isInvalid' | 'isDisabled'> & { hasValue: boolean }
>(
  ({ isInvalid, isDisabled }) => css`
    border: 1px solid var(--c-faint-strong-down);
    border-radius: 2px;

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
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
      border-color: var(--c-faint-weak-up);

      &:hover {
        box-shadow: none;
      }
    `}
  `
);

const Styled = applyDisplayNames({ Select, Input, Icon });

export default Styled;

import styled, { css } from 'styled-components';

import { shadow } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';
import Chevron from '@brix-ui/icons/chevron';

import Dropdown from '../_internal/dropdown';

const Icon = styled(Chevron)(
  () => css`
    width: 10px;
    height: 10px;

    cursor: pointer;

    transition: all var(--transition-short);
  `
);

const Select = styled(Dropdown)(
  () => css`
    border: 1px solid var(--c-faint-strong-down);
    border-radius: 2px;

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
    }

    &:focus-within {
      border-color: var(--c-accent-strong);
    }

    &[aria-invalid] {
      border-color: var(--c-critical-strong);

      &:focus-within {
        border-color: var(--c-critical-weak-up);
      }
    }

    &[aria-disabled] {
      border-color: var(--c-faint-weak-up);

      &:hover {
        box-shadow: none;
      }

      ${Icon} {
        cursor: not-allowed;
      }
    }
  `
);

const Styled = applyDisplayNames({ Select, Icon });

export default Styled;

import styled, { css } from 'styled-components';

import { shadow, size } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';
import Chevron from '@brix-ui/icons/chevron';

import Dropdown from '../_internal/dropdown';

const Icon = styled(Chevron)(
  () => css`
    ${size('var(--icon-size)')};

    cursor: pointer;

    transition: all var(--transition-short);
  `
);

const Select = styled(Dropdown)(
  () => css`
    --icon-size: 10px;

    border: 1px solid var(--input-border-color);
    border-radius: var(--input-border-radius);

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
    }

    &:focus-within {
      border-color: var(--input-border-color-focus);
    }

    &[aria-invalid] {
      border-color: var(--input-border-color-invalid);

      &:focus-within {
        border-color: var(--input-border-color-invalid-focus);
      }
    }

    &[aria-disabled] {
      border-color: var(--input-border-color-disabled);

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

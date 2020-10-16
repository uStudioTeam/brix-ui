import styled, { css } from 'styled-components';

import { shadow, size } from '@brix-ui/theme/mixin';
import { applyDisplayNames, createCustomProperties } from '@brix-ui/utils/functions';
import Chevron from '@brix-ui/icons/chevron';

import Dropdown from '../_internal/dropdown';

import type { SelectProps } from './select.props';

const Icon = styled(Chevron)(
  () => css`
    ${size('var(--icon-size)')};

    cursor: pointer;

    transition: all var(--transition-short);
  `
);

const validity = (state: 'valid' | 'invalid') => css`
  border-color: var(--input-border-color-${state});

  &:focus-within {
    border-color: var(--input-border-color-${state}-focus);
  }

  &:hover {
    box-shadow: ${shadow(`${state === 'valid' ? 'success' : 'critical'}-strong`, 0.25)};
  }
`;

const Select = styled(Dropdown)<Pick<SelectProps, 'customProperties'>>(
  ({ customProperties }) => css`
    ${createCustomProperties(customProperties, {
      iconSize: '10px',
    })};

    border: 1px solid var(--input-border-color);
    border-radius: var(--input-border-radius);

    &:hover {
      box-shadow: ${shadow('base-strong', 0.1)};
    }

    &:focus-within {
      border-color: var(--input-border-color-focus);
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

      ${Icon} {
        cursor: not-allowed;
      }
    }
  `
);

const Styled = applyDisplayNames({ Select, Icon });

export default Styled;

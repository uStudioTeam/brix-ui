import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { hidden } from '@brix-ui/theme/mixin';

import Dropdown from '../../_internal/dropdown';

import Text from '../../text';

const Value = styled(Text).attrs(() => ({
  forwardedAs: 'span',
}))`
  display: inline-block;

  width: auto;
`;

const TimeSelect = styled(Dropdown)(
  () => css`
    position: relative;

    width: auto;

    padding: 2px 8px 4px;

    border-radius: 2px;

    &:focus-within {
      background-color: var(--c-faint-weak);
    }

    &[data-has-value] {
      padding: 2px 10px 4px;
    }

    &[aria-disabled] {
      ${Value} {
        color: var(--c-faint-weak-up);
      }

      &[data-has-value] {
        ${Value} {
          color: var(--c-faint-strong-down);
        }
      }
    }

    select {
      ${hidden};

      z-index: 1;
    }
  `
);

const Styled = applyDisplayNames({ TimeSelect, Value });

export default Styled;

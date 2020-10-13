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

const TimeSelect = styled(Dropdown)<{ hasValue: boolean }>(
  ({ isDisabled, hasValue }) => css`
    position: relative;

    width: auto;

    padding: 2px ${hasValue ? 10 : 8}px 4px;

    border-radius: 2px;

    &:focus-within {
      background-color: var(--c-faint-weak);
    }

    ${isDisabled &&
    css`
      ${Value} {
        color: ${hasValue ? 'var(--c-faint-strong-down)' : 'var(--c-faint-weak-up)'};
      }
    `}

    select {
      ${hidden};

      z-index: 1;
    }
  `
);

const Styled = applyDisplayNames({ TimeSelect, Value });

export default Styled;

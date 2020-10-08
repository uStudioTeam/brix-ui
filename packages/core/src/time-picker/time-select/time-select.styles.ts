import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { hidden } from '@brix-ui/theme/mixin';

import DropdownStyles from '../../_internal/dropdown/dropdown.styles';
import Text from '../../text';

export const Input = styled(DropdownStyles.Input)`
  ${hidden};

  z-index: 1;
`;

const Value = styled(Text).attrs(() => ({
  forwardedAs: 'span',
}))`
  display: inline-block;

  width: auto;
`;

export const TimeSelect = styled(DropdownStyles.Dropdown)(
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
  `
);

const Styled = applyDisplayNames({ TimeSelect, Input, Value });

export default Styled;

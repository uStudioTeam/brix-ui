import styled, { css, keyframes } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { hidden } from '@brix-ui/theme/mixin';

import DropdownStyles from '../../_internal/dropdown/dropdown.styles';
import Text from '../../text';

export const Input = styled(DropdownStyles.Input)`
  ${hidden};

  z-index: 1;
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  
  49% {
    opacity: 1;
  }
  
  51% {
    opacity: 0;
  }
  
  100% {
    opacity: 0;
  }
`;

const Value = styled(Text).attrs(() => ({
  forwardedAs: 'span',
}))`
  display: inline-block;

  width: auto;
`;

export const TimeSelect = styled(DropdownStyles.Dropdown)<{ keyPressCount: number }>(
  ({ keyPressCount, isDisabled, hasValue }) => css`
    position: relative;

    width: auto;

    padding: 2px ${hasValue ? 10 : 8}px 4px;

    border-radius: 2px;

    &:before {
      height: 18px;
      width: 1px;

      position: absolute;
      left: ${keyPressCount + 1 === 2 ? '18px' : '8px'};
      top: 50%;

      opacity: 1;
      background-color: var(--c-base-strong);

      transform: translateY(-50%);

      animation: ${pulse} 1s infinite linear;
    }

    &:focus-within {
      background-color: var(--c-faint-weak);

      &:before {
        content: '';
      }
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

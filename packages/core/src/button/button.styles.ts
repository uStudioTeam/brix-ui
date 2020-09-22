import styled, { css } from 'styled-components';

import { font } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';

import type { ButtonProps } from './button.props';
import { buttonMixin, disabledButtonMixin } from './button.mixin';

const Button = styled.button<ButtonProps>(
  ({ intent = 'base', appearance = 'contained', isRounded }) => css`
    height: 28px;
    padding: 6px 16px;

    display: inline-flex;
    align-items: center;

    border-radius: ${isRounded ? 16 : 2}px;
    border: 1px solid transparent;

    ${font.body.p};
    
    &,
    & > * {
      line-height: 1;
    }
    
    & > *:not(:last-child) {
      margin-right: 12px;
    }

    transition: all 0.2s;

    &:active {
      transform: scale(0.995);
    }
    
    &:not(:disabled) {
      ${buttonMixin[appearance][intent]}};
    }

    &:disabled {
      cursor: not-allowed;
      user-select: none;
      
      ${disabledButtonMixin[appearance]};
    }
  `
);

const Styled = applyDisplayNames({ Button });

export default Styled;

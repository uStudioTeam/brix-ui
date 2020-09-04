import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import type { ButtonProps } from './button.props';
import { buttonMixin, disabledButtonMixin } from './button.mixin';

const Button = styled.button<
  Omit<ButtonProps, 'borderRadius'> & {
    $borderRadius: ButtonProps['borderRadius'];
  }
>(
  ({ intent = 'base', appearance = 'contained', $borderRadius: borderRadius = 'small' }) => css`
    padding: 2px 16px 4px;

    display: inline-block;

    border-radius: ${borderRadius === 'small' ? 2 : 16}px;
    border: 1px solid transparent;

    ${font.body.p};
    text-align: center;

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

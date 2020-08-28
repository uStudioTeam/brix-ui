import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import type { ButtonProps } from './button.props';
import { buttonMixin, disabledButtonMixin } from './button.mixin';

const Button = styled.button<ButtonProps>(
  ({ intent = 'base', appearance = 'contained', isDisabled }) => css`
    padding: 3px 16px 4px;

    display: inline-block;

    border-radius: 2px;
    border: 1px solid transparent;

    ${font.body.p};
    text-align: center;

    transition: all 0.2s;

    &:active {
      transform: scale(0.995);
    }

    ${isDisabled
      ? css`
          &:disabled {
            cursor: not-allowed;
            ${disabledButtonMixin[appearance]};
          }
        `
      : buttonMixin[appearance][intent]};
  `
);

const Styled = applyDisplayNames({ Button });

export default Styled;

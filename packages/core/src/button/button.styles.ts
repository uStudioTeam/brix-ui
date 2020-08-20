import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { ButtonProps } from '@ustudio-ui/core/button/button.props';
import { buttonMixin, disabledButtonMixin } from '@ustudio-ui/core/button/button.mixin';

const Button = styled.button<ButtonProps>(
  ({ intent = 'base', appearance = 'contained', isDisabled }) => css`
    ${isDisabled
      ? css`
          cursor: not-allowed;
          ${disabledButtonMixin[appearance]};
        `
      : buttonMixin[appearance][intent]};

    display: inline-block;

    padding: 3px 16px 4px;
    border-radius: 2px;

    ${font.body.p};
    text-align: center;

    transition: all 0.2s;
  `
);

const Styled = applyDisplayNames({ Button });

export default Styled;

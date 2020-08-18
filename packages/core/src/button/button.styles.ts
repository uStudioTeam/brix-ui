import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { ButtonProps } from '@ustudio-ui/core/button/button.props';
import { buttonsList, disabledButtonsList } from '@ustudio-ui/core/button/button.mixin';

const Button = styled.button<Omit<ButtonProps, 'disabled'> & {
  isDisabled: ButtonProps['isDisabled'];
}>(({intent = 'base', appearance = 'contained', isDisabled}) => css`
  ${isDisabled ? disabledButtonsList[appearance] : buttonsList[appearance][intent]};
  ${isDisabled && 'cursor: not-allowed;'};

  display: inline-block;
    
  padding: 3px 16px 4px ;
  margin: 10px;
  border-radius: 2px;

  ${font.body.p};
  text-align: center;
    
  transition: background-color 0.2s linear, color 0.2s linear, box-shadow 0.2s linear, text-shadow 0.2s linear;
  `
);

const Styled = applyDisplayNames({ Button });

export default Styled;

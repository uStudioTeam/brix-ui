import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { ButtonProps } from '@ustudio-ui/core/button/button.props';
import { buttonsList } from '@ustudio-ui/core/button/button.mixin';

const Button = styled.button<ButtonProps>(
  ({ intent = 'base', appearance = 'contained' }) => css`
    ${buttonsList[appearance][intent]};

    display: inline-block;
    padding: 4px 16px;
    margin: 10px;

    border-radius: 2px;

    ${font.body.p};
    text-align: center;
  `
);

const Styled = applyDisplayNames({ Button });

export default Styled;

import { getTextAppearance, getTextVariant, sc } from '../../../utils';
import { css } from 'styled-components';

const Text = sc('p')(
  ({ variant, appearance, align, dataColor }) => css`
    color: ${dataColor};

    text-align: ${align};

    ${getTextAppearance({ appearance })};
    ${getTextVariant({ variant })};
  `
)('Text');

export const Styled = { Text };

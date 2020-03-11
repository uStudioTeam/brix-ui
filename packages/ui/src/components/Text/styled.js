import { getTextAppearance, getTextVariant } from '../../utils';
import styled, { css } from 'styled-components';

const Text = styled.p.withConfig({ displayName: 'Text' })(
  ({ align, appearance, variant }) => css`
    color: inherit;

    text-align: ${align};

    ${getTextAppearance({ appearance })};
    ${getTextVariant({ variant })};
  `
);

export const Styled = { Text };

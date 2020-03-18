import { getTextAppearance, getTextVariant } from '../../../utils';
import styled, { css } from 'styled-components';
import { StyledComponents } from '../../../utils/styles/styled-component';

const Text = styled.p.withConfig({ displayName: 'Text' })(
  ({ align, appearance, variant }) => css`
    color: inherit;

    text-align: ${align};

    ${getTextAppearance({ appearance })};
    ${getTextVariant({ variant })};
  `
);

export const Styled = StyledComponents({ Text });

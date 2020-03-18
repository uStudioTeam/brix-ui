import styled, { css } from 'styled-components';
import { StyledComponents } from '../../../utils/styles/styled-component';
import { inject } from './inject.js';

const Meta = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--c-darkest);
`;

const Title = styled.div(
  ({ variant }) => css`
    display: inline-block;
    color: var(--c-dark);
    margin-bottom: var(--i-medium) - 0.375rem;
    
    ${inject.titleVariant(variant)}
  `
);

const Value = styled.div(
  ({ variant }) => css`
    display: inline-block;
    
    ${inject.valueVariant(variant)}
  `
);

export const Styled = StyledComponents({ Meta, Title, Value });

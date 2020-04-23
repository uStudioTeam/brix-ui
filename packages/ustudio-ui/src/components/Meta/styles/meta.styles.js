import { css } from 'styled-components';
import { sc } from '../../../utils';

import { inject } from './meta.inject';

const Meta = sc('div')(css`
  display: flex;
  flex-direction: column;

  color: var(--c-darkest);
`)('Meta');

const Title = sc('div')(
  ({ variant }) => css`
    display: inline-block;
    color: var(--c-dark);
    margin-bottom: var(--i-medium) - 0.375rem;
    
    ${inject.titleVariant(variant)}
  `
)('Title');

const Value = sc('div')(
  ({ variant }) => css`
    display: inline-block;
    
    ${inject.valueVariant(variant)}
  `
)('Value');

export const Styled = { Meta, Title, Value };

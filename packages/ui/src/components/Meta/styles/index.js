import Text from '../../Text';
import styled from 'styled-components';
import { StyledComponents } from '../../../utils/styles/styled-component';

const Meta = styled.div`
  display: flex;
  flex-direction: column;

  color: var(--c-darkest);
`;

const Title = styled(Text)`
  display: inline-block;
  color: var(--c-dark);
  margin-bottom: var(--i-medium) - 0.375rem;
`;

const Link = styled.a`
  display: inline-block;
  align-self: flex-start;
`;

export const Styled = StyledComponents({ Meta, Title, Link });

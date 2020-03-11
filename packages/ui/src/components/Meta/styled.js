import Text from '../Text';
import styled from 'styled-components';

const Meta = styled.div.withConfig({ displayName: 'Meta' })`
  display: flex;
  flex-direction: column;

  color: var(--c-darkest);
`;

const Title = styled(Text).withConfig({ displayName: 'Title' })`
  display: inline-block;
  color: var(--c-dark);
  margin-bottom: var(--i-medium) - 0.375rem;
`;

const Link = styled.a.withConfig({ displayName: 'Link' })`
  display: inline-block;
  align-self: flex-start;
`;

export const Styled = { Meta, Title, Link };

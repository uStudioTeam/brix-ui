import styled, { css } from 'styled-components';
import { Mixin } from '@ustudio/ui/theme';

const InlineCode = styled.code`
  padding: 0 var(--i-small);
  background-color: var(--c-light);
  border-radius: var(--border-radius);
`;

const Paragraph = styled.div`
  ${Mixin.Font.bodyRegular};
  margin: var(--i-medium) 0;
`;

const Quote = styled.blockquote`
  border-left: 2px solid var(--c-primary);
  padding-left: 1rem;
  margin: 1rem 0;
  color: var(--c-dark);

  ${Paragraph} {
    margin: 0;
  }
`;

const Heading = styled.h1`
  margin: 2rem 0 0;
  scroll-margin: calc(54px + 2rem) 0 0;
`;

const Root = styled.article`
  padding: 0 2rem 2rem;
  margin-top: -2.75rem;
  scroll-snap-type: y mandatory;
`;

const List = styled.ul(
  ({ depth }: { depth: number }) => css`
    margin: 0.25rem 0;
    padding-left: ${depth ? '2rem' : 0};

    display: grid;
    grid-auto-rows: auto;
    grid-gap: 0.5rem;
  `
);

const ListItem = styled.li`
  &:before {
    content: '-';
    color: var(--c-dark);
    padding-right: 0.5rem;
  }
`;

const Divider = styled.hr`
  display: none;
`;

export const Styled = { InlineCode, Paragraph, Quote, Heading, Root, List, ListItem, Divider };

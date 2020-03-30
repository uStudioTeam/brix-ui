import React, { ReactNode } from 'react';
import { Prism as Code } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';

import { Styled } from './styled';

export const renderers = {
  thematicBreak: Styled.Divider,
  root: Styled.Root,
  heading: ({ children, level }: { children: string; level: number }) => (
    <Styled.Heading
      // @ts-ignore
      as={`h${level}`}
      // @ts-ignore
      id={children[0]?.props?.children
        .split(' ')
        // @ts-ignore
        .reduce((id, word) => `${id ? `${id}-` : ''}${word}`, ``)
        .toLowerCase()}
    >
      {children}
    </Styled.Heading>
  ),
  blockquote: Styled.Quote,
  paragraph: Styled.Paragraph,
  // @ts-ignore
  list: ({ depth, children }: { depth: number; children: ReactNode[] }) => (
    <Styled.List depth={depth}>{children}</Styled.List>
  ),
  listItem: Styled.ListItem,
  inlineCode: Styled.InlineCode,
  code: ({ value, language }: { value: string; language: string }) => (
    <Code
      language={language}
      style={coy}
      customStyle={{
        padding: 'var(--i-regular) 0',
        marginBottom: '0',
        marginTop: '0',
      }}
      codeTagProps={{
        style: {
          whiteSpace: 'pre-wrap',
        },
      }}
    >
      {value}
    </Code>
  ),
  link: ({ href, children }: { href: string; children: string }) => (
    <a
      href={`${href[0] === '/' ? process.env.BASE_URL : ''}${href}`}
      target={`${href[0] === '/' || href[0] === '#' ? '_self' : '_blank'}`}
    >
      {children}
    </a>
  ),
};

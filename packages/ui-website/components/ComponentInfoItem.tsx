import React from 'react';

import { Text, Flex, Dropdown } from '@ustudio/ui';

import { Prism as JSX } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';

import toJSXString from 'react-element-to-jsx-string';

import styled from 'styled-components';

import { Link } from '../shared';

import { transformToKebabCase } from '../utils';
import { ReactComponent as LinkIcon } from '../public/assets/icons/link.svg';
import { ReactComponent as CodeIcon } from '../public/assets/icons/code.svg';

interface ComponentInfoItemProps {
  title?: string;
  description?: string;
  direction?: 'row' | 'column';
}

const Styled = {
  Article: styled.article`
    margin: var(--i-large) 0;

    display: flex;
    flex-direction: column;
    flex: 1;
  `,
  Description: styled(Text)`
    color: var(--c-dark);
  `,
  Dropdown: styled(Dropdown)`
    border: none;
    box-shadow: var(--neumo-shadow);

    &:hover {
      border: none;
      box-shadow: var(--neumo-shadow);
    }
  `,
  Anchor: styled.span`
    position: relative;
    top: -4rem;
    visibility: hidden;
  `,
  Title: styled(Text)`
    display: inline-block;
    scroll-margin: calc(54px + 2rem) 0 0;

    &:hover {
      a {
        opacity: 1;
      }
    }
  `,
  Link: styled.a`
    position: static;
    padding: 0 1rem;
    opacity: 0;
    transition: var(--transition);
  `,
  Content: styled.div`
    width: 100%;
    margin-bottom: 2rem;

    display: grid;
    grid-gap: 1rem;
    align-items: center;
  `,
  Meta: styled(Flex)`
    margin-bottom: 1.5rem;
  `,
  LinkIcon: styled(LinkIcon)`
    display: inline-block;
    width: 12px;
    height: 12px;
  `,
  CodeIcon: styled(CodeIcon)`
    display: inline-block;
    width: 12px;
    height: 12px;
  `,
};

export const ComponentInfoItem: React.FC<ComponentInfoItemProps> = ({ title, children, description }) => {
  return (
    <Styled.Article>
      {(title || description) && (
        <Styled.Meta direction="column" alignment={{ horizontal: 'start' }}>
          {title && (
            <>
              <Styled.Title variant="h4" id={transformToKebabCase(title)}>
                {title}
                <Link href={`#${transformToKebabCase(title)}`} passHref>
                  <Styled.Link>
                    <Styled.LinkIcon />
                  </Styled.Link>
                </Link>
              </Styled.Title>
            </>
          )}
          {description && <Styled.Description variant="body">{description}</Styled.Description>}
        </Styled.Meta>
      )}

      <Styled.Content>{children}</Styled.Content>

      <Flex>
        <Styled.Dropdown title={<Text variant="span">Show code</Text>} icon={<Styled.CodeIcon />}>
          <JSX
            language="jsx"
            style={coy}
            customStyle={{
              margin: 0,
              padding: 0,
            }}
            codeTagProps={{
              style: {
                whiteSpace: 'pre-wrap',
              },
            }}
          >
            {toJSXString(<>{children}</>, {
              maxInlineAttributesLineLength: 120,
              showDefaultProps: false,
              displayName: reactElement => {
                // @ts-ignore
                const type = reactElement?.type;

                if (typeof type === 'string') return type;

                return type?.displayName || type?.name || type?.render?.name || '';
              },
            })}
          </JSX>
        </Styled.Dropdown>
      </Flex>
    </Styled.Article>
  );
};

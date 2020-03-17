import React from 'react';

import Head from 'next/head';

import { Text, Flex } from '@ustudio/ui';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { renderers } from './markdown/renderers';

import { PropsTable, PropsMap } from './PropsTable';

interface ComponentInfoProps {
  name: string;
  props: PropsMap;
  classNames?: string[];
  description?: string;
  componentName?: string;
}

const Styled = {
  Heading: styled(Text)`
    margin-top: calc((2.875rem * 0.375) / -2);
  `,
  Description: styled.div`
    margin: 2.75rem -2rem -2rem;
    color: var(--c-dark);
  `,
};

export const ComponentInfo: React.FC<ComponentInfoProps> = ({
  name,
  children,
  props,
  classNames,
  description,
  componentName,
}) => {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Flex direction="column">
        <Styled.Heading variant="h1">{name}</Styled.Heading>

        <Styled.Description>
          <ReactMarkdown escapeHtml={false} source={description} renderers={renderers} />
        </Styled.Description>
      </Flex>

      {children}

      <PropsTable props={props} classNames={classNames} componentName={componentName} />
    </>
  );
};

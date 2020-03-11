import React, { Children, ReactElement } from 'react';

import Head from 'next/head';

import { Text, Grid, Cell } from '@ustudio/ui';
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
  Section: styled(Grid)`
    color: var(--c-darkest);
  `,
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
      <Grid gap={64}>
        <Cell direction="column">
          <Styled.Heading variant="h1">{name}</Styled.Heading>

          <Styled.Description>
            <ReactMarkdown escapeHtml={false} source={description} renderers={renderers} />
          </Styled.Description>
        </Cell>

        <Cell>
          <Grid gap={64} direction="column">
            {Children.map(children, child => <Cell direction="column">{child as ReactElement}</Cell>) as ReactElement[]}
          </Grid>
        </Cell>

        <Cell direction="column">
          <PropsTable props={props} classNames={classNames} componentName={componentName} />
        </Cell>
      </Grid>
    </>
  );
};

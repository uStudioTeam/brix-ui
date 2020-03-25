import React from 'react';

import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import { Cell, Grid } from 'ustudio-ui';

import { renderers } from './renderers';

interface DocsPageProps {
  name: string;
  content: string;
}

export const DocsPage = ({ name, content }: DocsPageProps) => (
  <>
    <Head>
      <title>{name}</title>
    </Head>

    <Grid>
      <Cell>
        <ReactMarkdown escapeHtml={false} source={content} renderers={renderers} />
      </Cell>
    </Grid>
  </>
);

import React from 'react';

import { NextPage } from 'next';

import { DocsPage, loadDocPage } from '../../components/markdown';

const Installation: NextPage<{ content: string }> = ({ content }) => <DocsPage name="Installation" content={content} />;

Installation.getInitialProps = loadDocPage(() => import(`../../../../README.md`));

export default Installation;

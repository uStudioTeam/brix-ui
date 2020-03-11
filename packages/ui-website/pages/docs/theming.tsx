import React from 'react';

import { NextPage } from 'next';

import { DocsPage, loadDocPage } from '../../components/markdown';

const Theming: NextPage<{ content: string }> = ({ content }) => <DocsPage name="Theming" content={content} />;

Theming.getInitialProps = loadDocPage(() => import(`../../docs/THEMING.md`));

export default Theming;

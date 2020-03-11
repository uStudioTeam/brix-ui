import React from 'react';

import { NextPage } from 'next';

import { DocsPage, loadDocPage } from '../../components/markdown';

const Hooks: NextPage<{ content: string }> = ({ content }) => <DocsPage name="Hooks" content={content} />;

Hooks.getInitialProps = loadDocPage(() => import(`../../docs/HOOKS.md`));

export default Hooks;

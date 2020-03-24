import React from 'react';

import { Head } from 'next/document';

const CustomHead: React.FC = () => (
  <Head>
    <link rel="stylesheet" href={`${process.env.BASE_URL}/fonts.css`} />

    <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.BASE_URL}/apple-touch-icon.png`} />
    <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.BASE_URL}/favicon-32x32.png`} />
    <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.BASE_URL}/favicon-16x16.png`} />
    <link rel="mask-icon" href={`${process.env.BASE_URL}/safari-pinned-tab.svg`} color="#5bbad5" />

    <meta name="apple-mobile-web-app-title" content="uStudio UI" />
    <meta name="application-name" content="uStudio UI" />
    <meta name="msapplication-TileColor" content="#2d89ef" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);

export default CustomHead;

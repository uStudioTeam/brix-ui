import React, { useEffect, useState } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { createGlobalStyle } from 'styled-components';

import { ThemeProvider } from 'ustudio-ui/theme';

import Layout from '../components/Layout';

const GlobalStyles = createGlobalStyle`
  :root {
    --neumo-shadow: -4px -4px 4px 0 #fff, 4px 4px 4px 0 var(--c-light);
  }

  body {
    height: 100vh;
    overflow-y: hidden;
    background-color: var(--c-lightest);
    color: var(--c-darkest);
  }
`;

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Bugfix order styled from styled-components in dev mode
  const [isMounted, setMounted] = useState(process.env.NODE_ENV === 'production');

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return isMounted ? (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <GlobalStyles />
    </>
  ) : null;
};

export default CustomApp;

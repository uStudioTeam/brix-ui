import React, { useEffect, useState } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import styled, { createGlobalStyle, css } from 'styled-components';

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

const Styled = {
  Overlay: styled.div(({ isLoaded }: { isLoaded: boolean }) => {
    return css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9000;
      background-color: #fff;
      background-image: url("${process.env.BASE_URL}/assets/images/banner-logo.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 200px;
      opacity: ${isLoaded ? 0 : 1};
      transition: 0.4s;
      pointer-events: none;
    `;
  }),
};

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Bugfix order styled from styled-components in dev mode
  const [isMounted, setMounted] = useState(process.env.NODE_ENV === 'production');
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);

    setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => setMounted(false);
  }, []);

  return isMounted ? (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ThemeProvider>
        <Styled.Overlay isLoaded={isLoaded} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <GlobalStyles />
    </>
  ) : null;
};

export default CustomApp;

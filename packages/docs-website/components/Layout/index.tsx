import React, { FC, useEffect, useState } from 'react';

import { Router, useRouter } from 'next/router';

import styled from 'styled-components';

import Header from './Header';
import Aside from './Aside';
import PlaceholderPage from './PlaceholderPage';
import Footer from './Footer';

const Styled = {
  Container: styled.div`
    position: relative;
    display: flex;

    height: 100vh;
    margin-top: -54px;
    overflow-y: hidden;
  `,
  IndexMain: styled.main`
    height: 100vh;
    overflow-y: scroll;
    overflow-x: unset;
    flex: 1;
    padding: calc(54px + var(--i-large)) 0 var(--i-large);
  `,
  ComponentsMain: styled.main`
    flex: 0.8 1 80%;

    height: 100vh;
    overflow-y: scroll;
    overflow-x: unset;
    padding: calc(54px + var(--i-large)) var(--i-large) 4rem;
  `,
  DocsMain: styled.main`
    height: 100vh;
    overflow-y: scroll;
    overflow-x: unset;
    flex: 1;
    padding: calc(54px + var(--i-large)) calc(50% - 512px) var(--i-large);
  `,
};

const Layout: FC = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => {
      setLoading(false);
      return document && document.querySelector('main')?.scrollTo(0, 0);
    });

    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
    };
  }, []);

  return (
    <>
      <Header />
      <Styled.Container>
        {pathname === '/' && <Styled.IndexMain>{isLoading ? <PlaceholderPage /> : children}</Styled.IndexMain>}

        {/^\/docs\/*/.test(pathname) && <Styled.DocsMain>{isLoading ? <PlaceholderPage /> : children}</Styled.DocsMain>}

        {/^\/components\/*/.test(pathname) && (
          <>
            <Aside />

            <Styled.ComponentsMain>{isLoading ? <PlaceholderPage /> : children} </Styled.ComponentsMain>
          </>
        )}
      </Styled.Container>
      <Footer />
    </>
  );
};

export default Layout;

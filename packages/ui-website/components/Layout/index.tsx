import { Mixin } from '@ustudio/ui/theme';
import React, { FC, useEffect, useState } from 'react';

import { Router, useRouter } from 'next/router';

import styled, { css } from 'styled-components';

import Header from './Header';
import Aside from './Aside';
import PlaceholderPage from './PlaceholderPage';
import Footer from './Footer';

const Styled = {
  Container: styled.div`
    position: relative;
    display: flex;

    height: 100vh;
    overflow-y: hidden;
  `,
  IndexMain: styled.main`
    height: 100vh;
    overflow-y: scroll;
    overflow-x: unset;
    flex: 1;
    padding: calc(54px + var(--i-large)) 0 0;
  `,
  ComponentsMain: styled.main`
    flex: 1;

    height: 100vh;
    overflow-y: scroll;
    overflow-x: unset;
    padding: var(--i-large) var(--i-large) 0;

    ${Mixin.Screen.md(css`
      flex: 0.9 1 90%;
    `)}

    ${Mixin.Screen.lg(css`
      padding: calc(54px + var(--i-large)) var(--i-large) 0;
      flex: 0.8 1 80%;
    `)}
  `,
  DocsMain: styled.main`
    height: 100vh;
    overflow-y: scroll;
    overflow-x: unset;
    flex: 1;
    padding: calc(54px + var(--i-large)) calc(50% - 512px) 0;
  `,
};

const Main: React.FC<{ pathname: string }> = ({ pathname, children }) => {
  if (/^\/components\/*/.test(pathname)) {
    return (
      <React.Fragment>
        <Aside />

        <Styled.ComponentsMain>{children}</Styled.ComponentsMain>
      </React.Fragment>
    );
  }

  if (/^\/docs\/*/.test(pathname)) {
    return <Styled.DocsMain>{children}</Styled.DocsMain>;
  }

  return <Styled.IndexMain>{children}</Styled.IndexMain>;
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
        <Main pathname={pathname}>
          {isLoading ? (
            <PlaceholderPage />
          ) : (
            <React.Fragment>
              {children}

              <Footer />
            </React.Fragment>
          )}
        </Main>
      </Styled.Container>
    </>
  );
};

export default Layout;

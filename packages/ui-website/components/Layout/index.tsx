import React, { FC, useEffect, useState } from 'react';

import { Router, useRouter } from 'next/router';

import Styled from './styles';

import Header from './Header';
import Aside from './Aside';
import PlaceholderPage from './PlaceholderPage';
import Footer from './Footer';

const Main: React.FC<{ pathname: string }> = ({ pathname, children }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setOpen(false);
    });

    return () => {
      Router.events.off('routeChangeStart', () => {
        setOpen(false);
      });
    };
  }, []);

  if (/^\/components\/*/.test(pathname)) {
    return (
      <>
        <Aside />

        <Styled.ComponentsButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
          <Styled.ComponentsIcon />
        </Styled.ComponentsButton>

        <Styled.ComponentsDrawer showOverlay isOpen={isOpen} onChange={() => setOpen(false)} position="right">
          <Styled.MobileAside />
        </Styled.ComponentsDrawer>

        <Styled.ComponentsMain>{children}</Styled.ComponentsMain>
      </>
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
            <>
              {children}

              <Footer />
            </>
          )}
        </Main>
      </Styled.Container>
    </>
  );
};

export default Layout;

import React, { FC, useEffect, useState } from 'react';

import { Router, useRouter } from 'next/router';

import Styled from './styles';

import Header from './Header';
import Main from './Main';
import PlaceholderPage from './PlaceholderPage';
import Footer from './Footer';

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

import { useMediaQuery } from '@ustudio/ui/hooks';
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react';
import Aside from './Aside';
import Styled from './styles';

const Main: React.FC<{ pathname: string }> = ({ pathname, children }) => {
  const [isOpen, setOpen] = useState(false);

  const isMd = useMediaQuery('screen and (min-width: 768px)');

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
        {isMd ? (
          <Aside />
        ) : (
          <>
            <Styled.ComponentsButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
              <Styled.ComponentsIcon />
            </Styled.ComponentsButton>

            <Styled.ComponentsDrawer showOverlay isOpen={isOpen} onChange={() => setOpen(false)} position="right">
              <Styled.MobileAside />
            </Styled.ComponentsDrawer>
          </>
        )}

        <Styled.ComponentsMain>{children}</Styled.ComponentsMain>
      </>
    );
  }

  if (/^\/docs\/*/.test(pathname)) {
    return <Styled.DocsMain>{children}</Styled.DocsMain>;
  }

  return <Styled.IndexMain>{children}</Styled.IndexMain>;
};

export default Main;

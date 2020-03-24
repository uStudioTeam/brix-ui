import { useMediaQuery } from '@ustudio/ui/hooks';
import React, { FC, ReactElement, useEffect, useState } from 'react';

import { Router } from 'next/router';

import { Link } from '../../../shared';
import Drawer from '@ustudio/ui/components/Drawer';

import Styled from './styles';

import packageJSON from '../../../../ui/package.json';

function renderLink({ title, link }: { title: string; link?: string }): ReactElement {
  return (
    <Link href={`/${(link || title).toLowerCase()}`} key={link || title} passHref>
      <a>{title}</a>
    </Link>
  );
}

function renderDocsLinks(): ReactElement[] {
  function renderLinkFromTitle(title: string): ReactElement {
    return renderLink({
      title,
      link: `docs/${title.toLowerCase()}`,
    });
  }

  return ['Installation', 'Theming', 'Hooks'].map(renderLinkFromTitle);
}

const Header: FC = () => {
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

  const NavContent = () => (
    <>
      {renderLink({ title: 'Components' })}

      {renderDocsLinks()}
    </>
  );

  const Logo = () => (
    <Link href="/" passHref>
      <Styled.LogoLink>
        <Styled.LogoImg />
      </Styled.LogoLink>
    </Link>
  );

  const Version = () => (
    <Styled.Version href="https://github.com/uStudioCompany/ustudio-ui" target="_blank" rel="noreferrer noopener">
      <Styled.Badge appearance={{ background: 'var(--c-lightest)', color: 'var(--c-neutral)' }}>
        {packageJSON.version}
      </Styled.Badge>
    </Styled.Version>
  );

  return (
    <Styled.Header>
      {
        isMd ? (
          <>
            <Styled.Nav>
              <Logo />
    
              <NavContent />
            </Styled.Nav>
  
            <Version />
          </>
        ) : (
          <>
            <Styled.Burger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
            
            <Logo />
  
            <Drawer showOverlay isOpen={isOpen} onChange={() => setOpen(!isOpen)} position="bottom">
              <Styled.MobileNav>
                <NavContent />
      
                <Version />
              </Styled.MobileNav>
            </Drawer>
          </>
        )
      }
    </Styled.Header>
  );
};

export default Header;

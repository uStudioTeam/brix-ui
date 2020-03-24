import React, { FC, ReactElement } from 'react';

import styled from 'styled-components';

import { Badge } from 'ustudio-ui';

import { Link } from '../../shared';

import { ReactComponent as LogoImg } from '../../public/assets/images/logo.svg';

import packageJSON from '../../../ustudio-ui/package.json';

const Styled = {
  Header: styled.header`
    position: sticky;
    top: 0;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 54px;

    padding: 0 2rem;

    background: transparent;

    &:before {
      content: '';
      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;

      background-color: var(--c-lightest);

      opacity: 0.95;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      z-index: 100;

      width: 100%;
      height: 0.5rem;
      background-image: linear-gradient(to bottom, var(--c-light), transparent);
    }
  `,
  LogoLink: styled.a`
    display: inline-flex;

    &:hover,
    &:focus {
      &:after {
        display: none;
      }
    }
  `,
  LogoImg: styled(LogoImg)`
    width: auto;
    height: 1.5rem;
  `,
  Nav: styled.nav`
    display: grid;
    grid-auto-flow: column;
    grid-gap: var(--i-large);
  `,
  Version: styled.a`
    display: inline-flex;

    &:after {
      display: none;
    }
  `,
  Badge: styled(Badge)`
    box-shadow: var(--neumo-shadow);
    transition: var(--transition);

    &:hover {
      color: var(--c-dark);
    }

    &:active {
      color: var(--c-primary);
    }
  `,
};

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
  return (
    <Styled.Header>
      <Styled.Nav>
        <Link href="/" passHref>
          <Styled.LogoLink>
            <Styled.LogoImg />
          </Styled.LogoLink>
        </Link>

        {renderLink({ title: 'Components' })}

        {renderDocsLinks()}
      </Styled.Nav>

      <Styled.Version href="https://github.com/uStudioCompany/ustudio-ui" target="_blank" rel="noreferrer noopener">
        <Styled.Badge appearance={{ background: 'var(--c-lightest)', color: 'var(--c-neutral)' }}>
          {packageJSON.version}
        </Styled.Badge>
      </Styled.Version>
    </Styled.Header>
  );
};

export default Header;

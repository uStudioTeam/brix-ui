import React from 'react';

import styled from 'styled-components';

import { Text } from 'ustudio-ui';

const Styled = {
  Footer: styled.footer`
    margin-top: var(--i-large);
    padding: 0.5rem 0;

    text-align: center;
    font-size: 0.75rem;

    background-color: var(--c-lightest);
  `,
  Text: styled(Text)`
    position: relative;
    color: var(--c-dark);
  `,
};

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Text variant="small">
        Released under the MIT License. Copyright © 2020. Made by{' '}
        <a href="https://ustudio.company" target="_blank" rel="noreferrer noopener">
          uStudio Company
        </a>{' '}
        with love ❤️
      </Styled.Text>
    </Styled.Footer>
  );
};

export default Footer;

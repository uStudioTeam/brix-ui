import React from 'react';

import styled from 'styled-components';
import { Flex, Placeholder } from '@ustudio/ui';

import Head from 'next/head';

const Styled = {
  Section: styled.section`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 2rem;

    cursor: wait;
  `,
};

const PlaceholderPage = () => {
  return (
    <>
      <Head>
        <title>uStudio UI</title>
      </Head>

      <Styled.Section>
        <Flex direction="column">
          <Placeholder variant="text" appearance={{ height: 'h1', width: '25%' }} />
          <Placeholder variant="text" appearance={{ height: 'body', width: '75%' }} />
        </Flex>

        <Styled.Section>
          <Flex direction="column">
            <Placeholder variant="text" appearance={{ height: 'h4', width: '33%' }} />
            <Placeholder variant="text" appearance={{ height: 'body', width: '50%' }} />
          </Flex>

          <Placeholder variant="block" appearance={{ height: '4rem', width: '100%' }} />

          <Placeholder variant="block" appearance={{ height: '54px', width: '100%' }} />

          <Placeholder variant="block" appearance={{ height: '20rem', width: '100%' }} />
        </Styled.Section>
      </Styled.Section>
    </>
  );
};

export default PlaceholderPage;

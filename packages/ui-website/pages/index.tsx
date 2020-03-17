import React, { useEffect, useState } from 'react';
import { Prism as Code } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';

import { NextPage } from 'next';
import Head from 'next/head';

import styled, { css, FlattenInterpolation, keyframes } from 'styled-components';
import { Grid, Cell, Text, Flex, Button } from '@ustudio/ui';

import { Link } from '../shared';

const appearAnimation = (indent: number = 1) => keyframes`
  from {
    bottom: ${indent}rem;
  }

  to {
    bottom: 0;
  }
`;

const appear = (indent?: number, delay: number = 0): FlattenInterpolation<any> => css`
  position: relative;
  bottom: ${indent || 0}rem;
  animation: ${appearAnimation(indent)} 1s ease-in-out forwards;
  animation-delay: ${delay}ms;
`;

const imageChange = (...opacity: [number, number, number, number]) => keyframes`
  ${[0, 33, 66, 100].reduce(
    (map: string, percent: number, index: number) => `
  ${map}

  ${percent}% {
    opacity: ${opacity[index]};
  }`,
    ``
  )}
`;

const Styled = {
  Banner: styled(Grid)`
    max-width: 1024px;
    margin: var(--i-large) auto 4rem;
    padding: 0 var(--i-large);
  `,
  Title: styled(Text)`
    ${appear(-1)};
  `,
  Subtitle: styled(Text)`
    ${appear(-1.5, 50)};
  `,
  Description: styled(Text)`
    ${appear(-2, 150)};
    margin-top: var(--i-regular);
  `,
  Actions: styled.div`
    ${appear(-1)};
    margin-top: var(--i-regular);
  `,
  GuideLink: styled(Button)`
    &:after {
      content: none;
    }
  `,
  PictureContainer: styled(Flex)`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    border-radius: var(--border-radius);
  `,
  Picture: styled(Flex)(
    ({ image, dataOpacity: opacity }: { image: string; dataOpacity: [number, number, number, number] }) => css`
      position: absolute;
      top: 0;
      left: 0;

      background-size: 100%;
      width: 100%;
      height: 100%;
      background-image: url(${image});

      animation: ${imageChange(...opacity)} 12s infinite;
    `
  ),
  AdvantagesContainer: styled(Flex)`
    padding: 3rem var(--i-large);
    background: var(--g-primary);
    color: var(--c-lightest);
  `,
  Advantages: styled(Grid)`
    max-width: 1024px;
    margin: var(--i-large) auto;
  `,
  AdvantageTitle: styled(Text)`
    margin-bottom: var(--i-regular);
  `,
  AdvantageLink: styled.a`
    color: var(--c-lightest);

    &:after {
      transform: scaleX(1);
    }

    &:hover:after {
      transform: scaleX(0);
    }
  `,
};

const Advantage: React.FC<{ title: string }> = ({ title, children }) => (
  <>
    <Styled.AdvantageTitle align="center" variant="h4">
      {title}
    </Styled.AdvantageTitle>

    <Text align="center">{children}</Text>
  </>
);

const Index: NextPage = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <>
      <Head>
        <title>uStudio UI</title>
      </Head>

      <Flex direction="column">
        <Styled.Banner xs={{ alignment: { horizontal: 'center' }, gap: 32 }}>
          <Cell>
            <Flex direction="column" alignment={{ vertical: 'center' }}>
              <Styled.Title variant="h1">uStudio UI</Styled.Title>

              <Styled.Subtitle variant="h6">simple and concise</Styled.Subtitle>

              <Styled.Description>
                The library of reusable UI components for React, made in minimalistic and light style, adopting modern
                technologies and approaches.
              </Styled.Description>

              <Code
                language="bash"
                style={coy}
                customStyle={{
                  margin: 'var(--i-large) 0 0',
                  opacity: isMounted ? 1 : 0,
                  transition: 'opacity 2s',
                }}
                codeTagProps={{
                  style: {
                    whiteSpace: 'pre-wrap',
                  },
                }}
              >
                {`$ yarn add @ustudio/ui \n# or \n$ npm i @ustudio/ui`}
              </Code>

              <Styled.Actions>
                <Link href="/docs/installation" passHref>
                  <Styled.GuideLink forwardedAs="a">Get started</Styled.GuideLink>
                </Link>
              </Styled.Actions>
            </Flex>
          </Cell>

          <Cell>
            <Styled.PictureContainer>
              <Styled.Picture
                image={`${process.env.BASE_URL}/assets/images/Illustration.jpg`}
                dataOpacity={[1, 0.5, 0, 1]}
              />

              <Styled.Picture
                image={`${process.env.BASE_URL}/assets/images/Illustration-Positive.jpg`}
                dataOpacity={[0, 1, 0.5, 0]}
              />

              <Styled.Picture
                image={`${process.env.BASE_URL}/assets/images/Illustration-Negative.jpg`}
                dataOpacity={[0, 0, 1, 0]}
              />
            </Styled.PictureContainer>
          </Cell>
        </Styled.Banner>

        <Styled.AdvantagesContainer>
          <Styled.Advantages xs={{ gap: 32 }}>
            {[
              <Advantage title="Minimalistic design">
                uStudio UI components implement minimalistic design for modern applications.
              </Advantage>,
              <Advantage title="Simple solution">
                Easily build complex interfaces starting with this{' '}
                <Link href="/docs/installation" passHref>
                  <Styled.AdvantageLink>guide</Styled.AdvantageLink>
                </Link>
                .
              </Advantage>,
              <Advantage title="SSR out of the box">
                Our components are built with a support of server side rendering.
              </Advantage>,
              <Advantage title="Typescript with love">
                Type definitions are bundled alongside everything else.
              </Advantage>,
            ].map(advantage => (
              <Cell key={advantage.props.title}>
                <Flex direction="column">{advantage}</Flex>
              </Cell>
            ))}
          </Styled.Advantages>
        </Styled.AdvantagesContainer>
      </Flex>
    </>
  );
};

export default Index;

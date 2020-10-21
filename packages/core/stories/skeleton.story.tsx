import React from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import { shadow } from '@brix-ui/theme/mixin';

import _Skeleton, { SkeletonProps } from '../src/skeleton';
import Flex from '../src/flex';

export const Skeleton = _Skeleton;

export default {
  title: 'Loaders/Skeleton',
  component: Skeleton,
  excludeStories: ['Skeleton'],

  args: {
    width: '100%',
    height: 'h1',
  },
} as Meta;

export const Basic: Story<SkeletonProps> = (args) => {
  return <Skeleton {...args} />;
};

const Card = styled(Flex).attrs(() => ({
  direction: 'column',
  padding: '1rem',
  gap: '1rem',
}))`
  border-radius: 4px;
  box-shadow: ${shadow('base-strong', 0.05)};
`;

const Author = styled(Flex).attrs(() => ({
  direction: 'column',
}))`
  flex-grow: 1;
`;

export const Layout: Story<SkeletonProps> = ({ isStatic }) => {
  return (
    <Flex as="section" direction="column" gap={{ vertical: '1rem' }}>
      {[...new Array(3).keys()].map((key) => {
        return (
          <Card forwardedAs="article" key={key}>
            <Flex as="header" gap="1rem">
              <Skeleton isRounded isStatic={isStatic} size="4rem" />

              <Author>
                <Skeleton
                  isStatic={isStatic}
                  height="h2"
                  width={{
                    min: 20,
                    max: 50,
                    unit: '%',
                  }}
                />

                <Flex gap="0.5rem">
                  <Skeleton
                    isStatic={isStatic}
                    height="p"
                    width={{
                      min: 35,
                      max: 80,
                      unit: '%',
                    }}
                  />
                </Flex>

                <Skeleton
                  isStatic={isStatic}
                  height="small"
                  width={{
                    min: 15,
                    max: 70,
                    unit: '%',
                  }}
                />
              </Author>
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
};

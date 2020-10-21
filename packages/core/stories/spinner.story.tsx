import React from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import { applyDisplayNames } from '@brix-ui/utils/functions';

import _Spinner, { SpinnerProps } from '../src/spinner';

export const Spinner = _Spinner;

export default {
  title: 'Loaders/Spinner',
  component: Spinner,
  excludeStories: ['Spinner'],

  args: {
    blades: 9,
    bladeSize: {
      width: '4px',
      height: '10px',
    },
    color: undefined,
    speed: 100,
    property: 'opacity',
    range: [0.25, 1],
    swirl: false,
    spread: 1,
    delay: undefined,
  },
} as Meta;

const Container = styled.main`
  width: 100%;
  height: 100%;

  padding: 5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--c-base-weak);
`;

const Styled = applyDisplayNames({ Container });

export const Basic: Story<SpinnerProps> = (args) => {
  return (
    <Styled.Container>
      <Spinner {...args} />
    </Styled.Container>
  );
};

import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import Spinner, { SpinnerProps } from '../src/spinner';

export default {
  title: 'Loaders/Spinner',
  component: Spinner,

  argTypes: {
    blades: {
      control: {
        type: 'number',
        min: 1,
      },
      defaultValue: {
        summary: `9`,
      },
    },
    bladeSize: {
      control: 'object',
    },
    speed: {
      control: 'number',
      defaultValue: {
        summary: `150`,
        details: 'ms',
      },
    },
    color: {
      control: 'color',
      defaultValue: {
        summary: `'faint-weak'`,
      },
    },
    opacity: {
      control: 'array',
      defaultValue: {
        summary: `[0.25, 1]`,
      },
    },
    swirl: {
      control: 'boolean',
      defaultValue: {
        summary: `false`,
      },
    },
    spread: {
      control: {
        type: 'number',
        min: 1,
        step: 0.1,
      },
      defaultValue: {
        summary: `1`,
      },
    },
  },
  args: {
    blades: 9,
    bladeSize: {
      width: '10px',
      height: '4px',
    },
    color: undefined,
    speed: 150,
    opacity: [0.25, 1],
    swirl: false,
    spread: 1,
  },
};

const Container = styled.main`
  width: 100%;
  height: 100%;

  padding: 5rem 0;
`;

export const Basic: Story<SpinnerProps> = (args) => {
  return (
    <Container>
      <Spinner {...args} />
    </Container>
  );
};

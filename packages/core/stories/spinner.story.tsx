import React from 'react';
import styled from 'styled-components';
import type { Story } from '@storybook/react';

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
      description: 'Number of blades arount the circle',
    },
    bladeSize: {
      control: 'object',
      description: 'Width and height of each individual blade',
    },
    color: {
      control: 'color',
      defaultValue: {
        summary: `'faint-weak'`,
      },
    },
    property: {
      control: 'text',
      defaultValue: {
        summary: `'opacity'`,
      },
      description: 'Property to animate',
    },
    range: {
      control: 'array',
      defaultValue: {
        summary: `[0.25, 1]`,
      },
      description: 'Values to transition between',
    },
    speed: {
      control: 'number',
      defaultValue: {
        summary: `100`,
        details: 'ms',
      },
      description: 'Speed of transitioning',
    },
    swirl: {
      control: 'boolean',
      defaultValue: {
        summary: `false`,
      },
      description: 'Rotate each blade slightly to create a swirl effect',
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
      description: "Blades' coefficient of distancing from the center",
    },
    delay: {
      control: {
        type: 'number',
        max: 5000,
      },
      description: 'Postpone the appearance of a Spinner',
    },
  },
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
};

const Container = styled.main`
  width: 100%;
  height: 100%;

  padding: 5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--c-base-weak);
`;

export const Basic: Story<SpinnerProps> = (args) => {
  return (
    <Container>
      <Spinner {...args} />
    </Container>
  );
};

import React from 'react';
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
    opacity: {
      control: 'array',
      defaultValue: {
        summary: `[0.25, 1]`,
      },
      description: 'Opacity values to transition between',
    },
    speed: {
      control: 'number',
      defaultValue: {
        summary: `150`,
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
      description: "Blades' distancing from the center",
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
      width: '10px',
      height: '4px',
    },
    color: undefined,
    speed: 150,
    opacity: [0.25, 1],
    swirl: false,
    spread: 1,
    delay: undefined,
  },
};

export const Basic: Story<SpinnerProps> = (args) => {
  return <Spinner {...args} />;
};

import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from '@ustudio-ui/core/button';

export default {
  title: 'Data/Button',
  component: Button,

  argTypes: {
    intent: {
      control: {
        type: 'inline-radio',
        options: ['base', 'accent', 'critical', 'success'],
      },
      defaultValue: {
        summary: `'base'`,
      },
    },
    appearance: {
      control: {
        type: 'inline-radio',
        options: ['contained', 'outlined', 'faint', 'text'],
      },
      defaultValue: {
        summary: `'contained'`,
      },
    },
    borderRadius: {
      control: {
        type: 'inline-radio',
        options: ['small', 'large'],
      },
      defaultValue: {
        summary: `'small'`,
      },
    },
    isDisabled: {
      control: 'boolean',
      type: 'function',
      defaultValue: {
        summary: 'false',
      },
    },
  },

  args: {
    intent: 'base',
    appearance: 'contained',
    borderRadius: 'small',
    isDisabled: false,
  },
} as Meta;

const capitalize = (string: string): string => `${string[0].toUpperCase()}${string.slice(1)}`;

export const Basic: Story<ButtonProps> = (args) => {
  return (
    <Button {...args}>
      {capitalize(args.intent as string)} {capitalize(args.appearance as string)}
    </Button>
  );
};

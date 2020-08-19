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
      description: 'Variant of the button color',
    },
    appearance: {
      control: {
        type: 'inline-radio',
        options: ['contained', 'outlined', 'faint', 'text'],
      },
      description: 'Variant of the button look',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables button',
      type: 'function',
    },
  },

  args: {
    intent: 'base',
    appearance: 'contained',
    isDisabled: false,
  },
} as Meta;

export const Basic: Story<ButtonProps> = (args) => {
  return (
    <Button {...args}>Click</Button>
  );
};

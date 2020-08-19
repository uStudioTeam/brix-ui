import React from 'react';

import Button from '@ustudio-ui/core/button';

export default {
  title: 'Data/Button',
  component: Button,

  argTypes: {
    intent: {
      control: {
        type: 'inline-radio',
        options: ['base', 'accent', 'critical', 'success'],
      },
    },
    appearance: {
      control: {
        type: 'inline-radio',
        options: ['contained', 'outlined', 'faint', 'text'],
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables button',
      type: 'function',
    },
    args: {
      intent: 'base',
      appearance: 'contained',
      isDisabled: false,
    },
  },
};

export const Basic = (args) => {
  return (
    <Button {...args}>Click</Button>
  );
};

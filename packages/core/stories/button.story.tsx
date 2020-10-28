import React from 'react';
import type { Meta, Story } from '@storybook/react';

import Text from '../src/text';
import _Button, { ButtonProps } from '../src/button';

export const Button = _Button;

export default {
  title: 'Form/Button',
  component: Button,
  excludeStories: ['Button'],

  args: {
    intent: 'base',
    appearance: 'contained',
    isRounded: false,
    isDisabled: false,
  },
} as Meta;

const capitalize = (string: string): string => `${string[0].toUpperCase()}${string.slice(1)}`;

export const Basic: Story<ButtonProps> = (args) => {
  return (
    <Button {...args}>
      <Text lineHeightCompensation variant="p">
        {capitalize(args.intent as string)} {capitalize(args.appearance as string)}
      </Text>
    </Button>
  );
};

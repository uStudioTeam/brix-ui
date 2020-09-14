import React from 'react';
import type { Meta, Story } from '@storybook/react';

import Flex from '../src/flex';
import Text from '../src/text';
import Button, { ButtonProps } from '../src/button';

export default {
  title: 'Form/Button',
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
      description: 'Color scheme of the `Button`',
    },
    appearance: {
      control: {
        type: 'inline-radio',
        options: ['contained', 'outlined', 'faint', 'text'],
      },
      defaultValue: {
        summary: `'contained'`,
      },
      description: 'Appearance preset',
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
    <Flex
      gap={{
        horizontal: '1rem',
      }}
      verticalAlign="center"
    >
      <Button {...args}>
        <Text lineHeightCompensation variant="p">
          {capitalize(args.intent as string)} {capitalize(args.appearance as string)}
        </Text>
      </Button>
    </Flex>
  );
};

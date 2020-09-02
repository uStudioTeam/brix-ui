import React from 'react';
import type { Story } from '@storybook/react';

import Badge, { BadgeProps } from '@ustudio-ui/core/badge';
import Flex from '@ustudio-ui/core/flex';

const positionControl = { type: 'inline-radio', options: ['start', 'center', 'end'] };

export default {
  title: 'Data/Badge',
  component: Badge,

  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    horizontalPosition: { control: positionControl },
    verticalPosition: { control: positionControl },
    horizontalOffset: { control: 'text' },
    verticalOffset: { control: 'text' },
    shouldDisplay: { control: 'boolean' },
    value: { control: 'text' },
  },
  args: {
    horizontalPosition: 'end',
    verticalPosition: 'start',
    value: 5,
  },
};

export const Basic: Story<BadgeProps> = (args) => {
  return (
    <Flex>
      <Badge {...args}>
        <div
          style={{
            width: '32px',
            height: '32px',
            background: 'var(--c-accent-strong)',
            borderRadius: '2px',
          }}
        />
      </Badge>
    </Flex>
  );
};

export const Standalone: Story<BadgeProps> = (args) => {
  return (
    <Flex>
      <Badge {...args} />
    </Flex>
  );
};

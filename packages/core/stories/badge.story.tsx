import React from 'react';
import type { Story } from '@storybook/react';

import Flex from '../src/flex';
import _Badge, { BadgeProps } from '../src/badge';

export const Badge = _Badge;

export default {
  title: 'Data/Badge',
  component: Badge,
  excludeStories: ['Badge'],

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

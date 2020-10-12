import React from 'react';
import type { Story } from '@storybook/react';

import { Intent } from '@brix-ui/types/component';
import { objectValues } from '@brix-ui/utils/functions';

import Status, { StatusProps } from '../src/status';

export default {
  title: 'Data/Status',
  component: Status,

  argTypes: {
    intent: {
      control: {
        type: 'inline-radio',
        options: objectValues(Intent),
      },
    },
    isStatic: {
      control: 'boolean',
    },
    hasBorder: {
      control: 'boolean',
    },
  },
  args: {
    intent: 'accent',
    hasBorder: true,
  },
};

export const Basic: Story<StatusProps> = (args) => {
  return <Status {...args} />;
};

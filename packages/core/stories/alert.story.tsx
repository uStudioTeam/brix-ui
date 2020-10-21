import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { capitalize } from '@brix-ui/utils/functions';
import { Intent } from '@brix-ui/types/component';
import Text from '@brix-ui/core/text';

import _Alert, { AlertProps } from '../src/alert';

export const Alert = _Alert;

export default {
  title: 'Data/Alert',
  component: Alert,
  excludeStories: ['Alert'],

  args: {
    intent: Intent.Base,
    showStatus: true,
  },
} as Meta;

export const Basic: Story<AlertProps> = (args) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <Alert {...args} onClose={args.onClose && (() => {})}>
      <Text lineHeightCompensation>{capitalize(args.intent as string)} alert message</Text>
    </Alert>
  );
};

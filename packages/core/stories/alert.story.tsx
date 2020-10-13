import React from 'react';
import { Story } from '@storybook/react';

import { capitalize, objectValues } from '@brix-ui/utils/functions';
import { Intent } from '@brix-ui/types/component';
import Text from '@brix-ui/core/text';

import Alert, { AlertProps } from '../src/alert';

export default {
  title: 'Data/Alert',
  component: Alert,

  argTypes: {
    intent: {
      control: {
        type: 'inline-radio',
        options: objectValues(Intent),
      },
    },
    showStatus: {
      control: 'boolean',
    },
    onClose: {
      control: 'boolean',
    },
  },

  args: {
    intent: Intent.Base,
    showStatus: true,
  },
};

export const Basic: Story<AlertProps> = (args) => {
  return (
    <Alert {...args} onClose={args.onClose && (() => {})}>
      <Text lineHeightCompensation>
        Very very very long{capitalize(args.intent as string)} alert message describing something important to the user
        inline
      </Text>
    </Alert>
  );
};

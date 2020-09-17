import React from 'react';
import type { Story } from '@storybook/react';

import Checkbox, { CheckboxProps } from '../src/checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,

  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
  },
};

export const Basic: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />;
};

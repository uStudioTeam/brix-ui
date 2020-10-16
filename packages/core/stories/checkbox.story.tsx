import React, { useCallback } from 'react';
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
      control: {
        type: 'inline-radio',
        options: ['valid', 'invalid', 'indeterminate'],
      },
    },
  },
};

export const Basic: Story<CheckboxProps> = ({ isInvalid, ...args }) => {
  const validity = useCallback((): typeof isInvalid => {
    switch ((isInvalid as unknown) as 'valid' | 'invalid' | 'indeterminate') {
      case 'invalid':
        return true;
      case 'valid':
        return false;
      case 'indeterminate':
      default:
        return undefined;
    }
  }, [isInvalid]);

  return <Checkbox isInvalid={validity()} {...args} />;
};

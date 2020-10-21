import React, { useCallback } from 'react';
import type { Meta, Story } from '@storybook/react';

import _Checkbox, { CheckboxProps } from '../src/checkbox';

export const Checkbox = _Checkbox;

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  excludeStories: ['Checkbox'],
} as Meta;

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

import React, { useCallback, useState } from 'react';
import type { Story } from '@storybook/react';

import TimePicker, { TimePickerProps, TimeSelect, TimeInput } from '../src/time-picker';

export default {
  title: 'Form/TimePicker',
  component: TimePicker,

  argTypes: {
    mode: {
      control: {
        type: 'inline-radio',
        options: ['AM', 'PM', 'Unset'],
      },
    },
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

export const Basic: Story<TimePickerProps> = ({ mode, isInvalid, ...args }) => {
  const [, setValue] = useState('');

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

  return (
    // @ts-ignore
    <TimePicker {...args} isInvalid={validity()} onChange={setValue} mode={mode === 'Unset' ? undefined : mode}>
      <TimeSelect name="hour" disabledOptions={(option) => Number.parseInt(option, 10) % 3 === 0} />

      <TimeInput name="minute" />

      <TimeInput name="second" />
    </TimePicker>
  );
};

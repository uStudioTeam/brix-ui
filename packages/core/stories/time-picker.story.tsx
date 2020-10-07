import React, { useState } from 'react';
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
      control: 'boolean',
    },
  },
};

export const Basic: Story<TimePickerProps> = ({ mode, ...args }) => {
  const [, setValue] = useState('');

  return (
    // @ts-ignore
    <TimePicker {...args} onChange={setValue} mode={mode === 'Unset' ? undefined : mode}>
      <TimeSelect name="hour" disabledOptions={(option) => Number.parseInt(option, 10) % 3 === 0} />

      <TimeInput name="minute" />

      <TimeInput name="second" />
    </TimePicker>
  );
};

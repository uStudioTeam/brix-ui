import React, { useCallback, useState } from 'react';
import type { Meta, Story } from '@storybook/react';

import _TimePicker, { TimePickerProps, TimeSelect as _TimeSelect, TimeInput as _TimeInput } from '../src/time-picker';

export const TimePicker = _TimePicker;
export const TimeSelect = _TimeSelect;
export const TimeInput = _TimeInput;

export default ({
  title: 'Form/TimePicker',
  component: TimePicker,
  subcomponents: { TimeSelect, TimeInput },
  excludeStories: ['TimePicker', 'TimeSelect', 'TimeInput'],
} as unknown) as Meta;

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

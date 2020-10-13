import type { Reducer } from 'react';

import type { TimePickerAction } from '../actions';
import type { TimePickerState } from './time-picker.state';

export const timePickerReducer: Reducer<TimePickerState, TimePickerAction> = (state, action) => {
  if (action.type === 'set_time') {
    const { name, value } = action.payload;

    return {
      ...state,
      [name]: value,
    };
  }

  return state;
};

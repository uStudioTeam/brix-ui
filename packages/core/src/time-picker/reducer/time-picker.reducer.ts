import type { Reducer } from 'react';

import type { TimePickerAction } from '../actions';
import type { TimePickerState } from './time-picker.state';

export const timePickerReducer: Reducer<TimePickerState, TimePickerAction> = (state, action) => {
  switch (action.type) {
    case 'set_time': {
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value,
      };
    }
    default: {
      return state;
    }
  }
};

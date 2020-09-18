import { Reducer } from 'react';

import type { RadioGroupAction } from '../actions';

import type { RadioGroupState } from './radio-group.state';

export const radioGroupReducer: Reducer<RadioGroupState, RadioGroupAction> = (state, action) => {
  switch (action.type) {
    case 'set_value': {
      const { value } = action.payload;

      return {
        ...state,
        value,
      };
    }
    case 'add_option': {
      const { value } = action.payload;
      const { options } = state;

      const nextOptions = new Set([...options]);
      nextOptions.add(value);

      return {
        ...state,
        options: nextOptions,
      };
    }
    case 'remove_option': {
      const { value } = action.payload;
      const { options } = state;

      const nextOptions = new Set([...options]);
      nextOptions.delete(value);

      return {
        ...state,
        options: nextOptions,
      };
    }
    case 'set_disabled': {
      const { isDisabled } = action.payload;

      return {
        ...state,
        isDisabled,
      };
    }
    case 'set_required': {
      const { isRequired } = action.payload;

      return {
        ...state,
        isRequired,
      };
    }
    case 'set_invalid': {
      const { isInvalid } = action.payload;

      return {
        ...state,
        isInvalid,
      };
    }
    default: {
      return state;
    }
  }
};

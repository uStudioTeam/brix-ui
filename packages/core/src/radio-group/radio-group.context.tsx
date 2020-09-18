import React, { createContext, FC, useCallback, useContext, useEffect, useReducer, useRef } from 'react';
import PT from 'prop-types';

import { applyPolymorphicFunctionProp, tryCall } from '@ustudio-ui/utils/functions';

import { RadioGroupDispatcher } from './actions';
import { radioGroupReducer } from './reducer';
import type { RadioGroupProps, RadioGroupValue } from './radio-group.props';

const RadioGroupContext = createContext<RadioGroupValue | undefined>(undefined);

const RadioGroup: FC<RadioGroupProps> = ({
  children,
  value,
  defaultValue,
  onChange,
  name,
  isDisabled,
  isRequired,
  isInvalid,
}) => {
  const [state, dispatch] = useReducer(radioGroupReducer, {
    value: value ?? defaultValue ?? '',
    options: new Set<string>(),
    isDisabled,
    isRequired,
    isInvalid,
  });
  const { current: dispatcher } = useRef(new RadioGroupDispatcher(dispatch));

  const handleChange = useCallback<RadioGroupValue['handleChange']>((optionValue, event) => {
    dispatch({
      type: 'set_value',
      payload: {
        value: optionValue,
      },
    });

    tryCall(onChange, optionValue, event);
  }, []);

  useEffect(() => dispatcher.setDisabled(isDisabled as boolean), [isDisabled]);
  useEffect(() => dispatcher.setRequired(isRequired as boolean), [isRequired]);
  useEffect(() => dispatcher.setInvalid(isInvalid as boolean), [isInvalid]);

  return (
    <RadioGroupContext.Provider value={{ name, dispatcher, handleChange, ...state }}>
      {applyPolymorphicFunctionProp(children, { name, dispatcher, handleChange, ...state })}
    </RadioGroupContext.Provider>
  );
};

RadioGroup.propTypes = {
  value: PT.string,
  defaultValue: PT.string,
  onChange: PT.func,
  name: PT.string.isRequired,

  isDisabled: PT.bool,
  isRequired: PT.bool,
  isInvalid: PT.bool,
};

export const useRadioGroup = (): RadioGroupValue => {
  const context = useContext(RadioGroupContext);

  if (context === undefined) {
    throw new ReferenceError('Make sure `RadioButton` is rendered inside `RadioGroup`');
  }

  return context;
};

export default RadioGroup;

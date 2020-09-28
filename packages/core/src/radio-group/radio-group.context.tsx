import React, { createContext, FC, useCallback, useContext } from 'react';
import PT from 'prop-types';

import { applyPolymorphicFunctionProp, tryCall } from '@brix-ui/utils/functions';
import { useDisabled } from '@brix-ui/contexts/disabled';
import useSingleSelection from '@brix-ui/hooks/use-single-selection';
import useUpdatedState from '@brix-ui/hooks/use-updated-state';

import type { RadioGroupProps, RadioGroupValue } from './radio-group.props';

const RadioGroupContext = createContext<RadioGroupValue | undefined>(undefined);

const RadioGroup: FC<RadioGroupProps> = ({
  children,
  value,
  defaultValue,
  onChange,
  name,
  isDisabled: _isDisabled,
  isRequired: _isRequired,
  isInvalid: _isInvalid,
}) => {
  const isDisabled = useDisabled(_isDisabled);
  const [isRequired] = useUpdatedState(_isRequired);
  const [isInvalid] = useUpdatedState(_isInvalid);

  const { dispatch: dispatcher, ...state } = useSingleSelection(value ?? defaultValue ?? '');

  const handleChange = useCallback<RadioGroupValue['handleChange']>((optionValue, event) => {
    dispatcher.setValue(optionValue);

    tryCall(onChange, optionValue, event);
  }, []);

  const props = {
    name,
    dispatcher,
    handleChange,
    isDisabled,
    isRequired,
    isInvalid,
    ...state,
  };

  return (
    <RadioGroupContext.Provider value={props}>
      {applyPolymorphicFunctionProp(children, props)}
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
    throw new ReferenceError('Make sure radio button is rendered inside `RadioGroup`');
  }

  return context;
};

export default RadioGroup;

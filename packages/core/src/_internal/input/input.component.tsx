import React, { ChangeEvent, ChangeEventHandler, useCallback } from 'react';

import { intrinsicComponent, tryCall } from '@ustudio-ui/utils/functions';

import useValue from '../hooks/use-value';

import type { InputProps } from './input.props';
import Styled from './input.styles';

const Input = intrinsicComponent<
  InputProps<string | number> & {
    getValue(event: ChangeEvent<HTMLInputElement>): string | number;
  },
  HTMLInputElement
>(function Input(
  { getValue, className, value, defaultValue, isDisabled, isRequired, isReadonly, onChange, ...props },
  ref
) {
  const [internalValue, setInternalValue] = useValue(value, defaultValue ?? '');

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setInternalValue(getValue(event));

      tryCall(onChange, internalValue, event);
    },
    [onChange, internalValue]
  );

  return (
    <Styled.Input
      ref={ref}
      value={internalValue}
      onChange={handleChange}
      disabled={isDisabled}
      required={isRequired}
      readOnly={isReadonly}
      {...props}
    />
  );
});

export default Input;

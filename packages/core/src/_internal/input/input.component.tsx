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
>(function Input({ getValue, value, defaultValue, isDisabled, isRequired, isReadonly, onChange, ...props }, ref) {
  const [internalValue, setInternalValue] = useValue(value, defaultValue ?? '');

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const nextValue = getValue(event);

      setInternalValue(nextValue);
      tryCall(onChange, nextValue, event);
    },
    [onChange]
  );

  return (
    <Styled.Input
      ref={ref}
      value={internalValue}
      onChange={handleChange}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      required={isRequired}
      aria-required={isRequired}
      readOnly={isReadonly}
      aria-readonly={isReadonly}
      aria-invalid={props.isInvalid}
      {...props}
    />
  );
});

export default Input;

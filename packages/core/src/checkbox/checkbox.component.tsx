import React, { ChangeEventHandler, useCallback } from 'react';

import { intrinsicComponent, tryCall } from '@ustudio-ui/utils/functions';

import { useAriaProps, useValue } from '../_internal/hooks';

import Styled from './checkbox.styles';
import type { CheckboxProps } from './checkbox.props';

const Checkbox = intrinsicComponent<CheckboxProps, HTMLInputElement>(function Checkbox(
  {
    styles,
    className,
    value,
    defaultValue,
    onChange,
    name,
    id,
    isDisabled,
    isRequired,
    isInvalid,
    containerRef,
    ...props
  },
  ref
) {
  const [internalValue, setInternalValue] = useValue(value, defaultValue ?? false);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const nextValue = event.target.checked;

      setInternalValue(nextValue);
      tryCall(onChange, nextValue, event);
    },
    [onChange]
  );

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);

  return (
    <Styled.Checkbox
      ref={containerRef}
      as={styles?.Checkbox}
      className={className}
      value={internalValue}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      {...propsWithoutAria}
    >
      <Styled.CheckIcon as={styles?.CheckIcon} />

      <Styled.Input
        ref={ref}
        type="checkbox"
        name={name}
        id={id}
        defaultChecked={internalValue}
        aria-checked={internalValue}
        value={internalValue ? 'on' : 'off'}
        onChange={handleChange}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-invalid={isInvalid}
        {...propsWithAria}
      />
    </Styled.Checkbox>
  );
});

export default Checkbox;

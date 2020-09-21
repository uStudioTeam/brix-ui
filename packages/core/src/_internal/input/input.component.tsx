import React, { ChangeEvent, ChangeEventHandler, InputHTMLAttributes, useCallback } from 'react';

import { intrinsicComponent, tryCall } from '@brix-ui/utils/functions';

import { useAriaProps, useValue } from '../hooks';
import Affix from '../affix';

import type { InputProps } from './input.props';
import Styled from './input.styles';

const Input = intrinsicComponent<
  InputProps<string | number> & {
    /**
     * These are considered to be native input props including aria-* attributes
     */
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    getValue(event: ChangeEvent<HTMLInputElement>): string | number;
  },
  HTMLInputElement
>(function Input(
  {
    getValue,
    styles,
    className,
    prefix,
    suffix,
    value,
    defaultValue,
    isDisabled,
    isRequired,
    isReadonly,
    isInvalid,
    onChange,
    type,
    inputMode,
    maxLength,
    minLength,
    name,
    id,
    pattern,
    placeholder,
    containerRef,
    inputProps,
    ...props
  },
  ref
) {
  const [internalValue, setInternalValue] = useValue(value, defaultValue ?? '');

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const nextValue = getValue(event);

      setInternalValue(nextValue);
      tryCall(onChange, nextValue, event);
    },
    [onChange]
  );

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);

  return (
    <Styled.Container
      ref={containerRef}
      as={styles?.Container}
      className={className}
      isDisabled={isDisabled}
      isReadonly={isReadonly}
      isInvalid={isInvalid}
      {...propsWithoutAria}
    >
      {prefix && <Affix>{prefix}</Affix>}

      <Styled.Input
        ref={ref}
        type={type}
        inputMode={inputMode}
        name={name}
        id={id}
        value={internalValue}
        onChange={handleChange}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        readOnly={isReadonly}
        aria-readonly={isReadonly}
        aria-invalid={isInvalid}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        placeholder={placeholder}
        aria-valuemin={Number(inputProps.min)}
        aria-valuemax={Number(inputProps.max)}
        {...inputProps}
        {...propsWithAria}
      />

      {suffix && <Affix>{suffix}</Affix>}
    </Styled.Container>
  );
});

export default Input;

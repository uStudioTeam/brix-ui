import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { useDisabled } from '@brix-ui/contexts/disabled';
import useAriaProps from '@brix-ui/hooks/use-aria-props';
import useInputValue from '@brix-ui/hooks/use-input-value';
import { affixable, formComponent, refProp, stylableComponent } from '@brix-ui/prop-types/common';

import Affix from '../affix';

import type { InputProps } from './input.props';
import Styled from './input.styles';

const Input = intrinsicComponent<
  InputProps<string | number> & {
    /**
     * These are considered to be native input props including aria-* attributes
     */
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    getValue(event: ChangeEvent<HTMLInputElement>, prevValue: string | number): string | number;
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
    isDisabled: _isDisabled,
    isRequired,
    isReadonly,
    isInvalid,
    onChange,
    type,
    inputMode,
    min,
    max,
    minLength,
    maxLength,
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
  const isDisabled = useDisabled(_isDisabled);

  const [internalValue, handleChange] = useInputValue(
    (value === undefined ? defaultValue : value) ?? '',
    onChange,
    getValue
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
      aria-hidden
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
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        placeholder={placeholder}
        aria-valuemin={Number.isNaN(Number(inputProps.min)) ? undefined : Number(inputProps.min)}
        aria-valuemax={Number.isNaN(Number(inputProps.max)) ? undefined : Number(inputProps.max)}
        {...inputProps}
        {...propsWithAria}
      />

      {suffix && <Affix>{suffix}</Affix>}
    </Styled.Container>
  );
});

Input.propTypes = {
  containerRef: refProp<HTMLLabelElement>(),

  ...affixable,
  ...formComponent(PT.oneOfType([PT.string, PT.number])),
  ...stylableComponent(Styled),
};

export default Input;

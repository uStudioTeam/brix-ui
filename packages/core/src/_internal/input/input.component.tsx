import React, { ChangeEvent } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { useDisabled } from '@brix-ui/contexts/disabled';
import useAriaProps from '@brix-ui/hooks/use-aria-props';
import useEventProps from '@brix-ui/hooks/use-event-props';
import useInputValue from '@brix-ui/hooks/use-input-value';
import { affixable, formComponent, refProp, stylableComponent } from '@brix-ui/prop-types/common';

import Affix from '../affix';

import type { InputProps } from './input.props';
import Styled from './input.styles';

const Input = intrinsicComponent<
  InputProps<string | number> & {
    getValue(event: ChangeEvent<HTMLInputElement>, prevValue: string | number): string | number;
  },
  HTMLInputElement
>(function Input(
  {
    getValue,
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
    minLength,
    max,
    maxLength,
    name,
    id,
    pattern,
    placeholder,
    autoComplete,
    autoFocus,
    form,
    list,
    step,
    containerRef,
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
  const { propsWithEvents, propsWithoutEvents } = useEventProps(propsWithoutAria);

  return (
    <Styled.Container
      ref={containerRef}
      className={className}
      isDisabled={isDisabled}
      isReadonly={isReadonly}
      isInvalid={isInvalid}
      aria-hidden
      {...propsWithoutEvents}
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
        aria-valuemin={Number.isNaN(Number(min)) ? undefined : Number(min)}
        aria-valuemax={Number.isNaN(Number(max)) ? undefined : Number(max)}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        form={form}
        list={list}
        step={step}
        {...propsWithEvents}
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

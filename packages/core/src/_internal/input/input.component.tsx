import React, { ChangeEvent } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
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
      aria-disabled={orUndefined(isDisabled)}
      aria-readonly={orUndefined(isReadonly)}
      aria-invalid={orUndefined(isInvalid)}
      aria-hidden
      {...propsWithoutEvents}
    >
      {prefix && <Affix className="input-prefix">{prefix}</Affix>}

      <Styled.Input
        ref={ref}
        type={type}
        inputMode={inputMode}
        name={name}
        id={id}
        value={internalValue}
        onChange={handleChange}
        disabled={isDisabled}
        aria-disabled={orUndefined(isDisabled)}
        required={isRequired}
        aria-required={orUndefined(isRequired)}
        readOnly={isReadonly}
        aria-readonly={orUndefined(isReadonly)}
        aria-invalid={orUndefined(isInvalid)}
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

      {suffix && <Affix className="input-suffix">{suffix}</Affix>}
    </Styled.Container>
  );
});

Input.propTypes = {
  containerRef: refProp<HTMLLabelElement>(),

  ...affixable,
  ...formComponent(PT.oneOfType([PT.string, PT.number])),
  ...stylableComponent('affixIndent'),
};

export default Input;

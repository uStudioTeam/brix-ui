import React, { ReactElement, useCallback, useMemo } from 'react';
import PT, { Validator } from 'prop-types';

import { intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
import { useDisabled } from '@brix-ui/contexts/disabled';
import useAriaProps from '@brix-ui/hooks/use-aria-props';
import useEventProps from '@brix-ui/hooks/use-event-props';
import useInputValue from '@brix-ui/hooks/use-input-value';
import { affixable, formComponent, refProp, stylableComponent } from '@brix-ui/prop-types/common';

import Affix from '../affix';

import type { DropdownOption, DropdownProps } from './dropdown.props';
import Styled from './dropdown.styles';

export const renderOptions = (
  options: DropdownOption[],
  {
    isSelected,
    isDisabled,
  }: {
    isSelected(value: string): boolean;
    isDisabled(value: string): boolean;
  }
): ReactElement[] => {
  return options.map(({ value, label }) => {
    const selected = isSelected(value);
    const disabled = isDisabled(value);

    return (
      <option
        key={value}
        aria-selected={selected || undefined}
        disabled={disabled}
        aria-disabled={disabled || undefined}
        value={value}
        label={label ?? value}
      />
    );
  });
};

const Dropdown = intrinsicComponent<DropdownProps, HTMLSelectElement>(function Dropdown(
  {
    children,
    options,
    placeholder,
    id,
    value,
    defaultValue,
    onChange,
    isDisabled: _isDisabled,
    isRequired,
    isInvalid,
    disabledOptions,
    containerRef,
    prefix,
    suffix,
    ...props
  },
  ref
) {
  const isDisabled = useDisabled(_isDisabled);

  const [internalValue, handleChange] = useInputValue(
    value === undefined ? defaultValue : value,
    onChange,
    (event) => event.target.value
  );

  const isOptionSelected = useCallback((optionValue: string) => optionValue === internalValue, [internalValue]);
  const isOptionDisabled = useCallback(
    (optionValue: string) => Boolean(isDisabled || disabledOptions?.includes(optionValue)),
    [isDisabled, JSON.stringify(disabledOptions)]
  );

  const hasValue = useMemo(() => internalValue !== undefined, [internalValue]);

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);
  const { propsWithEvents, propsWithoutEvents } = useEventProps(propsWithoutAria);

  return (
    <Styled.Dropdown
      ref={containerRef}
      data-has-value={orUndefined(hasValue)}
      aria-disabled={orUndefined(isDisabled)}
      aria-invalid={orUndefined(isInvalid)}
      aria-hidden
      {...propsWithoutEvents}
    >
      {prefix && <Affix>{prefix}</Affix>}

      <Styled.Input
        ref={ref}
        id={id}
        value={internalValue ?? placeholder}
        onChange={handleChange}
        disabled={isDisabled}
        aria-disabled={orUndefined(isDisabled)}
        aria-invalid={orUndefined(isInvalid)}
        {...propsWithAria}
        {...propsWithEvents}
      >
        {placeholder && (
          <option
            disabled
            aria-disabled
            aria-selected={hasValue ? undefined : true}
            value={placeholder}
            label={placeholder}
          />
        )}

        {children({
          isOptionSelected,
          isOptionDisabled,
        })}
      </Styled.Input>

      {suffix && <Affix>{suffix}</Affix>}
    </Styled.Dropdown>
  );
});

Dropdown.propTypes = {
  children: PT.func.isRequired,

  options: PT.arrayOf(
    PT.exact({
      label: PT.string,
      value: PT.string.isRequired,
    }).isRequired
  ).isRequired as Validator<DropdownProps['options']>,

  placeholder: PT.string,

  disabledOptions: PT.arrayOf(PT.string.isRequired),

  containerRef: refProp<HTMLLabelElement>(),

  ...affixable,
  ...formComponent(PT.string),
  ...stylableComponent(),
};

export default Dropdown;

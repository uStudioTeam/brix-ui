import React, { ChangeEventHandler, LabelHTMLAttributes, ReactElement, useCallback, useMemo } from 'react';

import { intrinsicComponent, tryCall } from '@ustudio-ui/utils/functions';
import { useAriaProps } from '../_internal/hooks/use-aria-props';
import { useValue } from '../_internal/hooks/use-value';

import type { SelectGroup, SelectOption, SelectProps } from './select.props';
import Styled from './select.styles';

const renderOptions = (
  options: SelectOption[],
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
      <option key={value} aria-selected={selected} disabled={disabled} aria-disabled={disabled} value={value}>
        {label ?? value}
      </option>
    );
  });
};

const Select = intrinsicComponent<SelectProps, HTMLSelectElement>(function Select(
  {
    styles,
    className,
    options,
    placeholder,
    value,
    defaultValue,
    onChange,
    isDisabled,
    isRequired,
    isInvalid,
    disabledOptions,
    disabledGroups,
    containerRef,
    ...props
  },
  ref
) {
  const [internalValue, setInternalValue] = useValue(value, defaultValue ?? placeholder);

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      const nextValue = event.target.value;

      setInternalValue(nextValue);
      tryCall(onChange, nextValue, event);
    },
    [onChange]
  );

  const isOptionSelected = useCallback((optionValue: string) => optionValue === internalValue, [internalValue]);
  const isOptionDisabled = useCallback(
    (optionValue: string) => Boolean(isDisabled || disabledOptions?.includes(optionValue)),
    [isDisabled, JSON.stringify(disabledOptions)]
  );
  const isGroupDisabled = useCallback((groupIndex: number) => Boolean(isDisabled || disabledGroups?.[groupIndex]), [
    isDisabled,
    JSON.stringify(disabledGroups),
  ]);

  const isGroupSelect = useMemo(() => 'options' in options[0], [options[0]]);

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);

  return (
    <Styled.Select ref={containerRef} {...(propsWithoutAria as LabelHTMLAttributes<HTMLLabelElement>)}>
      <Styled.Icon />

      <Styled.Input
        ref={ref}
        value={internalValue}
        onChange={handleChange}
        hasValue={internalValue !== placeholder}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        isInvalid={isInvalid}
        aria-invalid={isInvalid}
        {...propsWithAria}
      >
        {placeholder && <option disabled>{placeholder}</option>}

        {isGroupSelect
          ? (options as SelectGroup[]).map(({ label, options: groupOptions }, groupIndex) => {
              const isOptionGroupDisabled = isGroupDisabled(groupIndex);

              return (
                <optgroup
                  key={label}
                  label={label}
                  disabled={isOptionGroupDisabled}
                  aria-disabled={isOptionGroupDisabled}
                >
                  {renderOptions(groupOptions, {
                    isSelected: isOptionSelected,
                    isDisabled: (optionValue: string) => isOptionGroupDisabled || isOptionDisabled(optionValue),
                  })}
                </optgroup>
              );
            })
          : renderOptions(options as SelectOption[], {
              isSelected: isOptionSelected,
              isDisabled: isOptionDisabled,
            })}
      </Styled.Input>
    </Styled.Select>
  );
});

export default Select;

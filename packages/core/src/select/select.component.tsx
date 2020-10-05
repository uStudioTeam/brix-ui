import React, { useCallback, useMemo } from 'react';
import PT, { Validator } from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { useDisabled } from '@brix-ui/contexts/disabled';
import { stylableComponent } from '@brix-ui/prop-types/common';
import { extract } from '@brix-ui/prop-types/utils';

import Dropdown, { renderOptions } from '../_internal/dropdown';

import type { SelectGroup, SelectOption, SelectProps } from './select.props';
import Styled from './select.styles';

const Select = intrinsicComponent<SelectProps, HTMLSelectElement>(function Select(
  { styles, options, isDisabled: _isDisabled, disabledGroups, suffix, ...props },
  ref
) {
  const isDisabled = useDisabled(_isDisabled);

  const isGroupDisabled = useCallback(
    (groupIndex: number) => Boolean(isDisabled || disabledGroups?.includes(groupIndex)),
    [isDisabled, JSON.stringify(disabledGroups)]
  );

  const isGroupSelect = useMemo(() => 'options' in options[0], [options[0]]);

  return (
    <Dropdown
      ref={ref}
      styles={{
        Dropdown: Styled.Select,
      }}
      options={
        isGroupSelect
          ? (options as SelectGroup[]).flatMap(({ options: groupOptions }) => groupOptions)
          : (options as SelectOption[])
      }
      isDisabled={isDisabled}
      suffix={suffix || <Styled.Icon as={styles?.Icon} />}
      {...props}
    >
      {({ isOptionSelected, isOptionDisabled }) => {
        return isGroupSelect
          ? (options as SelectGroup[]).map(({ label, options: groupOptions }, groupIndex) => {
              const isOptionGroupDisabled = isGroupDisabled(groupIndex);

              return (
                <optgroup
                  key={label}
                  label={label}
                  disabled={isOptionGroupDisabled}
                  aria-disabled={isOptionGroupDisabled || undefined}
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
            });
      }}
    </Dropdown>
  );
});

const { children: _children, styles: _styles, options, ...dropdownPropTypes } = extract([Dropdown]);

Select.propTypes = {
  ...dropdownPropTypes,

  options: PT.oneOfType([
    options as Validator<SelectOption[]>,
    PT.arrayOf(
      PT.exact({
        label: PT.string.isRequired,
        options,
      })
    ).isRequired,
  ]).isRequired as Validator<SelectProps['options']>,

  disabledGroups: PT.arrayOf(PT.number.isRequired),

  ...stylableComponent(Styled),
};

export default Select;

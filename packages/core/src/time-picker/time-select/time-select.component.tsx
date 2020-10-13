import React, { useCallback, useMemo, useRef, WeakValidationMap } from 'react';
import PT from 'prop-types';
import { useMergeRefs } from 'use-callback-ref';

import { fillArray, intrinsicComponent, objectValues, toDouble } from '@brix-ui/utils/functions';
import { Values } from '@brix-ui/utils/types';
import { extract } from '@brix-ui/prop-types/utils';
import { stylableComponent } from '@brix-ui/prop-types/common';

import Dropdown, { DropdownProps, renderOptions } from '../../_internal/dropdown';

import { Granularity } from '../entity';
import { useFocusPass, useId, usePlaceholder } from '../hooks';
import { useTimePicker } from '../time-picker.component';
import type { TimePickerProps } from '../time-picker.props';

import type { TimeSelectProps } from './time-select.props';
import Styled from './time-select.styles';

const prepopulate = (granularity: Values<typeof Granularity>, mode: TimePickerProps['mode']): string[] => {
  const array = (() => {
    switch (granularity) {
      case 'hour':
        if (mode) {
          return fillArray(12).map((key) => key + 1);
        }

        return fillArray(24);
      case 'minute':
      case 'second':
      default:
        return fillArray(60);
    }
  })();

  return array.map(toDouble);
};

const TimeSelect = intrinsicComponent<TimeSelectProps, HTMLSelectElement>(function TimeSelect(
  { name, options: _options, isDisabled: localDisabled, disabledOptions, placeholder, ...props },
  externalRef
) {
  const internalRef = useRef<HTMLSelectElement>(null);
  const ref = useMergeRefs([internalRef, externalRef]);

  const {
    [name]: value,
    isDisabled,
    isRequired,
    isInvalid,
    focusOn,
    passFocus,
    resetFocus,
    mode,
    dispatcher,
  } = useTimePicker();

  const { handleKeyDown, handleFocus } = useFocusPass({
    value,
    name,
    ref,
    focusOn,
    passFocus,
    resetFocus,
  });

  const options = _options || useMemo(() => prepopulate(name, mode), [name, mode]);
  const formattedOptions = options.map((option) => ({
    value: option,
    label: mode && name === Granularity.Hour ? `${option} ${mode.toLowerCase()}` : undefined,
  }));

  const finalPlaceholder = usePlaceholder({ placeholder, name });
  const finalId = useId({ name, id: props.id });

  const handleChange = useCallback<NonNullable<DropdownProps['onChange']>>(
    (optionValue) => {
      dispatcher.setTime({
        name,
        value: optionValue,
      });
    },
    [name]
  );

  return (
    <Styled.TimeSelect
      ref={ref}
      prefix={
        <Styled.Value align="center" lineHeightCompensation>
          {value || finalPlaceholder}
        </Styled.Value>
      }
      options={formattedOptions}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={isInvalid}
      hasValue={value !== undefined}
      value={value}
      onChange={handleChange}
      onKeyDown={(event) => {
        // Failsafe for Firefox default behaviour
        if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
          event.preventDefault();
        }

        handleKeyDown(event);
      }}
      onFocus={handleFocus}
      id={finalId}
      placeholder={finalPlaceholder}
      aria-label={value || finalPlaceholder}
      disabledOptions={typeof disabledOptions === 'function' ? options.filter(disabledOptions) : disabledOptions}
      {...props}
    >
      {({ isOptionSelected, isOptionDisabled }) => {
        return renderOptions(formattedOptions, {
          isSelected: isOptionSelected,
          isDisabled: (optionValue) => {
            return Boolean(isOptionDisabled(optionValue) || localDisabled || isDisabled);
          },
        });
      }}
    </Styled.TimeSelect>
  );
});

const {
  children: _children,
  value: _value,
  defaultValue: _defaultValue,
  onChange: _onChange,
  isRequired: _isRequired,
  isInvalid: _isInvalid,
  prefix: _prefix,
  suffix: _suffix,
  options: _options,
  disabledOptions: _disabledOptions,
  ...dropdownPropTypes
} = extract([Dropdown]);

TimeSelect.propTypes = {
  name: PT.oneOf(objectValues(Granularity)).isRequired,

  options: PT.arrayOf(PT.string.isRequired),
  disabledOptions: PT.oneOfType([PT.func, PT.arrayOf(PT.string.isRequired)]),

  ...dropdownPropTypes,
  ...stylableComponent(),
} as WeakValidationMap<TimeSelectProps>;

export default TimeSelect;

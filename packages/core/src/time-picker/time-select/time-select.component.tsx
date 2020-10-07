import React, { useCallback, useMemo, useRef } from 'react';
import { useMergeRefs } from 'use-callback-ref';

import { fillArray, intrinsicComponent, toDouble } from '@brix-ui/utils/functions';
import { Values } from '@brix-ui/utils/types';

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
  { styles, name, options: _options, isDisabled: localDisabled, disabledOptions, placeholder, ...props },
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

  const { keyPressCount, handleKeyDown, handleFocus } = useFocusPass({
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
    label: mode && `${option} ${mode.toLowerCase()}`,
  }));

  const finalPlaceholder = usePlaceholder({ placeholder, name });
  const finalId = useId(name, props.id);

  const handleChange = useCallback<NonNullable<DropdownProps['onChange']>>(
    (optionValue) => {
      dispatcher.setTime({
        name,
        value: optionValue,
      });

      passFocus(1);
    },
    [name]
  );

  return (
    <Dropdown
      ref={ref}
      // Had to use it here for proper props' types merging
      // @ts-ignore
      as={styles?.TimeSelect || Styled.TimeSelect}
      styles={{
        Dropdown: styles?.TimeSelect || Styled.TimeSelect,
        Input: styles?.Input || Styled.Input,
      }}
      prefix={
        <Styled.Value align="center" lineHeightCompensation>
          {value || finalPlaceholder}
        </Styled.Value>
      }
      options={formattedOptions}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={isInvalid}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      keyPressCount={keyPressCount}
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
    </Dropdown>
  );
});

export default TimeSelect;

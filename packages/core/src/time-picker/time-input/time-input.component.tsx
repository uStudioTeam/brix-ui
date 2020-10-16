import React, { useCallback, useMemo, useRef } from 'react';
import PT from 'prop-types';
import { useMergeRefs } from 'use-callback-ref';

import { classNames, intrinsicComponent, minMax, objectValues, toDouble } from '@brix-ui/utils/functions';
import { refProp, stylableComponent } from '@brix-ui/prop-types/common';

import { Granularity } from '../entity';
import { useFocusPass, useId, usePlaceholder } from '../hooks';
import { useTimePicker } from '../time-picker.component';

import type { TimeInputProps } from './time-input.props';
import Styled from './time-input.styles';

const TimeInput = intrinsicComponent<TimeInputProps, HTMLInputElement>(function TimeInput(
  { className, name, placeholder, containerRef, ...props },
  externalRef
) {
  const internalLabelRef = useRef<HTMLLabelElement>(null);
  const labelRef = useMergeRefs([internalLabelRef, containerRef || null]);
  const internalInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useMergeRefs([internalInputRef, externalRef]);

  const {
    [name]: value,
    isDisabled,
    isRequired,
    isInvalid,
    mode,
    focusOn,
    passFocus,
    resetFocus,
    dispatcher,
  } = useTimePicker();

  const finalPlaceholder = usePlaceholder({ placeholder, name });
  const finalId = useId({ name, id: props.id });

  const { handleKeyDown, handleFocus } = useFocusPass({ value, name, ref: inputRef, focusOn, passFocus, resetFocus });

  const { min, max } = useMemo(() => {
    const defaultMax = (() => {
      if (name === Granularity.Hour) {
        return mode ? 12 : 24;
      }

      return 59;
    })();

    return {
      min: props.min ?? 0,
      max: props.max ?? defaultMax,
    };
  }, [props.min, props.max]);

  const handleChange = useCallback(
    (inputValue: string) => {
      dispatcher.setTime({
        name,
        value: inputValue,
      });
    },
    [name]
  );

  return (
    <Styled.TimeInput
      ref={inputRef}
      containerRef={labelRef}
      className={classNames('time-input', className)}
      type="number"
      inputMode="numeric"
      id={finalId}
      min={min}
      max={max}
      maxLength={2}
      placeholder={finalPlaceholder}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={isInvalid}
      value={value}
      onChange={handleChange}
      getValue={({ target: { valueAsNumber } }, prevValue) => {
        return Number.isNaN(valueAsNumber)
          ? prevValue
          : toDouble(minMax(min, Number.parseInt(`${valueAsNumber}`, 10), max));
      }}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      {...props}
    />
  );
});

TimeInput.propTypes = {
  name: PT.oneOf(objectValues(Granularity)).isRequired,

  min: PT.number,
  max: PT.number,

  containerRef: refProp<HTMLLabelElement>(),

  ...stylableComponent(),
};

export default TimeInput;

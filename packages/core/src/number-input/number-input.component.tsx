import React, { ChangeEvent, useCallback, WeakValidationMap } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { formComponent } from '@brix-ui/prop-types/common';
import { extract } from '@brix-ui/prop-types/utils';

import Input from '../_internal/input';

import type { NumberInputProps } from './number-input.props';

const NumberInput = intrinsicComponent<NumberInputProps, HTMLInputElement>(function NumberInput(
  { type = 'decimal', inputMode, min, max, step, ...props },
  ref
) {
  const handleGetValue = useCallback<(event: ChangeEvent<HTMLInputElement>) => number | ''>(
    ({ target: { valueAsNumber } }) => (Number.isNaN(valueAsNumber) ? '' : valueAsNumber),
    []
  );

  return (
    <Input
      ref={ref}
      {...props}
      getValue={handleGetValue}
      type={type === 'tel' ? type : 'number'}
      inputMode={inputMode ?? type}
      min={min}
      max={max}
      step={step}
    />
  );
});

const { type: _type, inputMode: _inputMode, ...inputPropTypes } = extract([Input]);

NumberInput.propTypes = {
  type: PT.oneOf(['tel', 'decimal', 'numeric']),
  inputMode: PT.oneOf(['tel', 'decimal', 'numeric']),

  ...inputPropTypes,
  ...formComponent(PT.number),
} as WeakValidationMap<NumberInputProps>;

export default NumberInput;

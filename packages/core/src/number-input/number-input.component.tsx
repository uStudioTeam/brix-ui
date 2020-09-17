import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import { stylableComponent } from '@ustudio-ui/prop-types/common';

import Input from '../_internal/input';

import type { NumberInputProps } from './number-input.props';

const NumberInput = intrinsicComponent<NumberInputProps, HTMLInputElement>(function NumberInput(
  { type = 'decimal', inputMode, min, max, step, ...props },
  ref
) {
  return (
    <Input
      ref={ref}
      {...props}
      getValue={({ target: { valueAsNumber } }) => (Number.isNaN(valueAsNumber) ? '' : valueAsNumber)}
      type={type === 'tel' ? type : 'number'}
      inputMode={inputMode ?? type}
      inputProps={{ min, max, step }}
    />
  );
});

NumberInput.propTypes = {
  type: PT.oneOf(['tel', 'decimal', 'numeric']),
  inputMode: PT.oneOf(['tel', 'decimal', 'numeric']),

  ...stylableComponent(),
};

export default NumberInput;

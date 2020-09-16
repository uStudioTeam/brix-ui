import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import Input from '../_internal/input';

import type { NumberInputProps } from './number-input.props';

const NumberInput = intrinsicComponent<NumberInputProps, HTMLInputElement>(function NumberInput(
  { type, ...props },
  ref
) {
  return (
    <Input
      ref={ref}
      {...props}
      getValue={({ target: { valueAsNumber } }) => (Number.isNaN(valueAsNumber) ? '' : valueAsNumber)}
      type={type === 'tel' ? type : 'number'}
      inputMode={type}
    />
  );
});

export default NumberInput;

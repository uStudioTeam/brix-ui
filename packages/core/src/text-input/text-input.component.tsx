import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import Input from '../_internal/input';

import type { TextInputProps } from './text-input.props';

const TextInput = intrinsicComponent<TextInputProps, HTMLInputElement>(function TextInput({ type, ...props }, ref) {
  return (
    <Input
      ref={ref}
      {...props}
      getValue={({ target: { value } }) => value}
      type={type}
      inputMode={type === 'password' ? 'text' : type}
    />
  );
});

export default TextInput;

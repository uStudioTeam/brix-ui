import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import { stylableComponent } from '@ustudio-ui/prop-types/common';

import Input from '../_internal/input';

import type { TextInputProps } from './text-input.props';

const TextInput = intrinsicComponent<TextInputProps, HTMLInputElement>(function TextInput({ type, ...props }, ref) {
  return (
    <Input
      ref={ref}
      {...props}
      getValue={({ target: { value } }) => value}
      type={type}
      inputMode={props.inputMode ?? type === 'password' ? 'text' : type}
    />
  );
});

TextInput.propTypes = {
  type: PT.oneOf(['text', 'password', 'email', 'url', 'search']),

  ...stylableComponent(),
};

export default TextInput;

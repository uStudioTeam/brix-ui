import React, { InputHTMLAttributes } from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import { refProp, stylableComponent } from '@ustudio-ui/prop-types/common';

import Input from '../_internal/input';

import type { TextInputProps } from './text-input.props';

const TextInput = intrinsicComponent<TextInputProps, HTMLInputElement>(function TextInput(
  { type, autoComplete, inputMode, ...props },
  ref
) {
  return (
    <Input
      ref={ref}
      {...props}
      getValue={({ target: { value } }) => value}
      type={type}
      inputMode={inputMode ?? type === 'password' ? 'text' : type}
      inputProps={
        {
          autoComplete,
        } as InputHTMLAttributes<HTMLInputElement>
      }
    />
  );
});

TextInput.propTypes = {
  type: PT.oneOf(['text', 'password', 'email', 'url', 'search']),
  inputMode: PT.oneOf(['text', 'password', 'email', 'url', 'search']),

  containerRef: refProp<HTMLLabelElement>(),

  ...stylableComponent(),
};

export default TextInput;

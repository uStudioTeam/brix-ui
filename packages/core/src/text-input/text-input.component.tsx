import React, { WeakValidationMap } from 'react';
import PT from 'prop-types';

import { classNames, intrinsicComponent } from '@brix-ui/utils/functions';
import { formComponent } from '@brix-ui/prop-types/common';
import { extract } from '@brix-ui/prop-types/utils';

import Input from '../_internal/input';

import type { TextInputProps } from './text-input.props';

const TextInput = intrinsicComponent<TextInputProps, HTMLInputElement>(function TextInput(
  { className, type, inputMode, ...props },
  ref
) {
  return (
    <Input
      ref={ref}
      className={classNames('text-input', className)}
      {...props}
      getValue={({ target: { value } }) => value}
      type={type}
      inputMode={inputMode ?? type === 'password' ? 'text' : type}
    />
  );
});

const { type: _type, inputMode: _inputMode, ...inputPropTypes } = extract([Input]);

TextInput.propTypes = {
  type: PT.oneOf(['text', 'password', 'email', 'url', 'search']),
  inputMode: PT.oneOf(['text', 'password', 'email', 'url', 'search']),

  ...inputPropTypes,
  ...formComponent(PT.string),
} as WeakValidationMap<TextInputProps>;

export default TextInput;

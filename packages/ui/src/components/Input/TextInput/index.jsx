import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { BaseInput, props } from '../BaseInput';

import { Styled } from '../styles';

const TextInput = forwardRef(function TextInput(
  {
    label,
    value,
    defaultValue,
    onChange,
    isDisabled = false,
    isRequired = false,
    prefix,
    suffix,
    classNames,
    className = '',
    autoComplete = 'off',
    ...htmlAttributes
  },
  ref
) {
  return (
    <BaseInput
      ref={ref}
      type="text"
      label={label}
      value={value}
      defaultValue={defaultValue}
      onChange={({ target: { value: inputValue } }) => onChange(inputValue)}
      isDisabled={isDisabled}
      isRequired={isRequired}
      prefix={prefix}
      suffix={suffix}
      classNames={classNames}
      className={className}
      autoComplete={autoComplete}
      {...htmlAttributes}
    />
  );
});

const { TextAreaLabel: _tal, ...StyledTextInput } = Styled;

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  ...props.propTypes({ valueType: PropTypes.string, classes: StyledTextInput }),
};

TextInput.defaultProps = {
  ...props.defaultProps,
  autoComplete: 'off',
};

export default TextInput;

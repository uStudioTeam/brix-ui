import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import useDefaultValue from '../../../hooks/use-default-value';

import { BaseInput, props } from '../BaseInput';

import { Styled } from '../styles';

const TextInput = forwardRef(function TextInput(
  {
    id,
    name,
    value,
    defaultValue,
    onChange,
    isDisabled = false,
    isRequired = false,
    prefix,
    suffix,
    styled,
    classNames,
    className,
    autoComplete = 'off',
    ...htmlAttributes
  },
  ref
) {
  useDefaultValue(onChange, { value, defaultValue });

  return (
    <BaseInput
      ref={ref}
      type="text"
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={({ target: { value: inputValue } }) => onChange(inputValue)}
      isDisabled={isDisabled}
      isRequired={isRequired}
      prefix={prefix}
      suffix={suffix}
      $styled={styled}
      $classNames={classNames}
      className={className}
      autoComplete={autoComplete}
      {...htmlAttributes}
    />
  );
});

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  ...props.propTypes({ valueType: PropTypes.string, classes: Styled }),
};

TextInput.defaultProps = {
  ...props.defaultProps,
  autoComplete: 'off',
};

export default TextInput;

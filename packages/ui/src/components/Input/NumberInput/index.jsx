import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import { BaseInput, props } from '../BaseInput';

import { Styled } from '../styles';

const NumberInput = forwardRef(function NumberInput(
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
    classNames,
    className,
    autoComplete = 'off',
    ...htmlAttributes
  },
  ref
) {
  const [localValue, setLocalValue] = useState('');

  const validateValue = validatedValue => {
    const regExp = /^(([\-]?){1})([0-9]*(\d?))[.,]?([0-9]*(\d?))$/;

    return validatedValue ? regExp.test(validatedValue) : true;
  };

  const isDivider = symbol => symbol === '.' || symbol === ',';

  const transformedValue = enteredValue => {
    if (enteredValue.length === 1 && isDivider(enteredValue.charAt(0))) {
      return `0${enteredValue}`;
    }
    if (enteredValue.length === 2 && enteredValue.charAt(0) === '-' && isDivider(enteredValue.charAt(1))) {
      return `-0${enteredValue.charAt(1)}`;
    }

    return enteredValue;
  };

  const handleChange = ({ target: { value: inputValue } }) => {
    if (validateValue(inputValue)) {
      setLocalValue(transformedValue(inputValue));
      return onChange(+transformedValue(inputValue) || '');
    }
    return false;
  };

  return (
    <BaseInput
      ref={ref}
      type="text"
      id={id}
      name={name}
      value={localValue}
      defaultValue={defaultValue}
      onChange={handleChange}
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

NumberInput.displayName = 'NumberInput';

NumberInput.propTypes = {
  ...props.propTypes({
    valueType: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
    classes: Styled,
  }),
};

NumberInput.defaultProps = props.defaultProps;

export default NumberInput;

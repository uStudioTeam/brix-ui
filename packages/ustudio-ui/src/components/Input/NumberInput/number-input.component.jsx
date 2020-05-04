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
    styled,
    classNames,
    className,
    autoComplete = 'off',
    ...htmlAttributes
  },
  ref
) {
  const [localValue, setLocalValue] = useState(defaultValue !== undefined ? `${defaultValue}` : '');

  const validateValue = validatedValue => {
    const regExp = /^(([\-]?){1})([0-9]*(\d?))[.,]?([0-9]*(\d?))$/;

    return validatedValue ? regExp.test(validatedValue) : true;
  };

  const isDivider = (string, position) => string[position] === '.' || string[position] === ',';

  const transformValue = enteredValue => {
    if (enteredValue.length === 1 && isDivider(enteredValue, 0)) {
      return `0${enteredValue}`;
    }
    if (enteredValue.length === 2 && enteredValue[0] === '-' && isDivider(enteredValue, 1)) {
      return `-0${enteredValue[1]}`;
    }

    return enteredValue;
  };

  const handleChange = ({ target: { value: inputValue } }) => {
    if (validateValue(inputValue)) {
      const transformedValue = transformValue(inputValue);
      setLocalValue(transformedValue);

      return onChange(transformedValue === '' ? undefined : +transformedValue);
    }
    return false;
  };

  return (
    <BaseInput
      ref={ref}
      type="text"
      inputMode="decimal"
      id={id}
      name={name}
      value={localValue}
      defaultValue={defaultValue}
      onChange={handleChange}
      isDisabled={isDisabled}
      isRequired={isRequired}
      prefix={prefix}
      suffix={suffix}
      styled={styled}
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
    valueType: PropTypes.number,
    classes: Styled,
  }),
};

NumberInput.defaultProps = props.defaultProps;

export default NumberInput;

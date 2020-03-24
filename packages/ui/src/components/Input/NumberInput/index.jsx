import React, { forwardRef } from 'react';
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
  const [localValue, setLocalValue] = React.useState('');
  const validateValue = validatedValue => {
    const regExp = /^(([\-]?){1})([1-9]*(\d?))[.,]?([1-9]*(\d?))$/;

    return validatedValue ? regExp.test(validatedValue) : true;
  };

  const transformedValue = value => {
    if (value.length === 1 && (value.charAt(0) === '.' || value.charAt(0) === ',')) {
      return `0${value}`;
    }
    if (value.length === 2 && value.charAt(0) === '-' && (value.charAt(1) === '.' || value.charAt(1) === ',')) {
      return `-0${value.charAt(1)}`;
    }
    return value;
  };

  const handleChange = e => {
    if (validateValue(e.target.value)) {
      return setLocalValue(transformedValue(e.target.value)) && onChange(+transformedValue(e.target.value) || '');
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
      onChange={e => handleChange(e)}
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

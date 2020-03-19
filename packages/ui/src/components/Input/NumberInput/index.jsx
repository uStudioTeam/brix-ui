import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { BaseInput, props } from '../BaseInput';

import { Styled } from '../styles';

const NumberInput = forwardRef(function NumberInput(
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
    className,
    autoComplete = 'off',
    ...htmlAttributes
  },
  ref
) {
  return (
    <BaseInput
      ref={ref}
      type="number"
      label={label}
      value={value}
      defaultValue={defaultValue}
      onChange={({ target: { valueAsNumber: inputValue } }) => onChange(inputValue || '')}
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

const { TextAreaLabel: _tal, ...StyledNumberInput } = Styled;

NumberInput.displayName = 'NumberInput';

NumberInput.propTypes = {
  ...props.propTypes({
    valueType: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
    classes: StyledNumberInput,
  }),
};

NumberInput.defaultProps = props.defaultProps;

export default NumberInput;

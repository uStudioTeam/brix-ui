import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../../utils';

import { Styled } from '../styled';

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
    <Styled.InputContainer isDisabled={isDisabled} className={`${classNames?.InputContainer || ''} ${className || ''}`}>
      {prefix && <Styled.Prefix className={classNames?.Prefix || ''}>{prefix}</Styled.Prefix>}

      <Styled.Input
        ref={ref}
        type="number"
        name={label}
        value={value ?? defaultValue ?? ''}
        onChange={({ target: { valueAsNumber: inputValue } }) => onChange(inputValue || '')}
        autoComplete={autoComplete}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-labelledby={`${label} number input`}
        className={`${classNames?.Input || ''} ${className || ''}`}
        {...htmlAttributes}
      />

      {suffix && <Styled.Suffix className={classNames?.Suffix || ''}>{suffix}</Styled.Suffix>}
    </Styled.InputContainer>
  );
});

const { TextAreaLabel: _, ...StyledNumberInput } = Styled;

NumberInput.displayName = 'NumberInput';

NumberInput.propTypes = {
  ...inputProps(PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])])),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  ...classNames(Object.keys(StyledNumberInput)),
};

NumberInput.defaultProps = {
  isDisabled: false,
  isRequired: false,
};

export default NumberInput;

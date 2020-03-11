import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../../utils';

import { Styled } from '../styled';

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
        type="text"
        name={label}
        value={value ?? defaultValue}
        onChange={({ target: { value: inputValue } }) => onChange(inputValue)}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-labelledby={`${label} text input`}
        autoComplete={autoComplete}
        className={`${classNames?.Input || ''} ${className || ''}`}
        {...htmlAttributes}
      />

      {suffix && <Styled.Suffix className={classNames?.Suffix || ''}>{suffix}</Styled.Suffix>}
    </Styled.InputContainer>
  );
});

const { TextAreaLabel: _, ...StyledTextInput } = Styled;

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  ...inputProps(PropTypes.string),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  ...classNames(Object.keys(StyledTextInput)),
};

TextInput.defaultProps = {
  isDisabled: false,
  isRequired: false,
  autoComplete: 'off',
};

export default TextInput;

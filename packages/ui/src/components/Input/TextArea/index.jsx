import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../../utils';

import { Styled } from '../styled';

const TextArea = forwardRef(function TextArea(
  {
    label,
    value,
    defaultValue,
    onChange,
    isDisabled = false,
    isRequired = false,
    classNames,
    className,
    rows = 3,
    ...htmlAttributes
  },
  ref
) {
  return (
    <Styled.InputContainer isDisabled={isDisabled} className={`${classNames?.InputContainer || ''} ${className || ''}`}>
      <Styled.Input
        as="textarea"
        ref={ref}
        name={label}
        value={value ?? defaultValue}
        onChange={({ target: { value: inputValue } }) => onChange(inputValue)}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-labelledby={`${label} text input`}
        rows={rows}
        className={`${classNames?.Input || ''} ${className || ''}`}
        {...htmlAttributes}
      />
    </Styled.InputContainer>
  );
});

const { Prefix: _p, Suffix: _s, TextAreaLabel: _tal, ...StyledTextArea } = Styled;

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  ...inputProps(PropTypes.string),
  ...classNames(Object.keys(StyledTextArea)),
};

TextArea.defaultProps = {
  isDisabled: false,
  isRequired: false,
  rows: 3,
};

export default TextArea;

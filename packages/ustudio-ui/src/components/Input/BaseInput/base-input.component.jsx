import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../../utils';

import { Styled } from '../styles';

const BaseInput = forwardRef(function BaseInput(
  {
    id,
    name,
    value,
    defaultValue = '',
    onChange,
    isDisabled,
    isRequired,
    prefix,
    suffix,
    styled,
    classNames,
    className = '',
    ...inputProps
  },
  ref
) {
  return (
    <Styled.InputContainer isDisabled={isDisabled} className={className} $classNames={classNames} $styled={styled}>
      {prefix && (
        <Styled.Prefix $classNames={classNames} $styled={styled}>
          {prefix}
        </Styled.Prefix>
      )}

      <Styled.Input
        ref={ref}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-labelledby={name}
        $classNames={classNames}
        $styled={styled}
        {...inputProps}
      />

      {suffix && (
        <Styled.Suffix $classNames={classNames} $styled={styled}>
          {suffix}
        </Styled.Suffix>
      )}
    </Styled.InputContainer>
  );
});

BaseInput.displayName = 'BaseInput';

const propTypes = ({ valueType, classes, slots = true }) => {
  const includedSlots = slots ? { prefix: PropTypes.node, suffix: PropTypes.node } : {};

  return {
    ...inputProps(valueType),
    ...classNames(Object.keys(classes)),
    ...includedSlots,
  };
};

const defaultProps = {
  isDisabled: false,
  isRequired: false,
};

const props = { propTypes, defaultProps };

export { BaseInput, props };

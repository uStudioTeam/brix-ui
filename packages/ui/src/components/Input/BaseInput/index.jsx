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
    classNames,
    className = '',
    ...inputProps
  },
  ref
) {
  return (
    <Styled.InputContainer isDisabled={isDisabled} className={className} classNames={classNames}>
      {prefix && <Styled.Prefix classNames={classNames}>{prefix}</Styled.Prefix>}

      <Styled.Input
        ref={ref}
        id={id}
        name={name}
        value={value ?? defaultValue}
        onChange={onChange}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-labelledby={name}
        classNames={classNames}
        {...inputProps}
      />

      {suffix && <Styled.Suffix classNames={classNames}>{suffix}</Styled.Suffix>}
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

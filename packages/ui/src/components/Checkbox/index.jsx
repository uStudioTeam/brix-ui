import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Icon from '../internal/Icon';
import { classNames, inputProps } from '../../utils';

import { Styled } from './styles';

const Checkbox = forwardRef(function Checkbox(
  { label, value, defaultValue, onChange, isDisabled = false, isRequired = false, classNames, className = '' },
  ref
) {
  return (
    <Styled.Container className={className} classNames={classNames} isDisabled={isDisabled}>
      <Styled.Input
        ref={ref}
        type="checkbox"
        id={label}
        name={label}
        defaultChecked={value ?? defaultValue}
        onChange={() => {
          onChange && onChange(!value);
        }}
        readOnly={isDisabled}
        aria-checked={value ?? defaultValue}
        aria-labelledby={`${label} checkbox`}
        aria-readonly={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        classNames={classNames}
      />

      <Styled.Checkbox classNames={classNames}>
        <Icon name="check" />
      </Styled.Checkbox>
    </Styled.Container>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  ...inputProps(PropTypes.bool),
  ...classNames(Object.keys(Styled)),
};

Checkbox.defaultProps = {
  isRequired: false,
  isDisabled: false,
};

export default Checkbox;

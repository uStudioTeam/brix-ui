import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../utils';

import { Styled } from './styles';

const Switch = forwardRef(function Switch(
  {
    id,
    name,
    value,
    defaultValue,
    onChange,
    isDisabled = false,
    isRequired = false,
    alternative,
    classNames,
    className = '',
  },
  ref
) {
  return (
    <Styled.SwitchContainer className={className} classNames={classNames} isDisabled={isDisabled}>
      <Styled.Input
        ref={ref}
        type="checkbox"
        id={id}
        name={name}
        defaultChecked={value ?? defaultValue}
        onChange={() => onChange && onChange(!value)}
        readOnly={isDisabled}
        aria-checked={value ?? defaultValue}
        aria-labelledby={name}
        aria-readonly={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        classNames={classNames}
      />

      <Styled.Switch alternative={alternative} classNames={classNames} />
    </Styled.SwitchContainer>
  );
});

Switch.displayName = 'Switch';

Switch.propTypes = {
  ...inputProps(PropTypes.bool),
  alternative: PropTypes.bool,
  ...classNames(Object.keys(Styled)),
};

Switch.defaultProps = {
  isDisabled: false,
  isRequired: false,
};

export default Switch;

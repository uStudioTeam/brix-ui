import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../utils';

import { Styled } from './styled';

const Switch = forwardRef(function Switch(
  { label, value, defaultValue, onChange, isDisabled = false, isRequired = false, alternative, classNames, className },
  ref
) {
  return (
    <Styled.Container className={`${classNames?.Container || ''} ${className || ''}`} isDisabled={isDisabled}>
      <Styled.Input
        ref={ref}
        type="checkbox"
        id={label}
        name={label}
        defaultChecked={value ?? defaultValue}
        onChange={() => onChange && onChange(!value)}
        readOnly={isDisabled}
        aria-checked={value ?? defaultValue}
        aria-labelledby={`${label} switch`}
        aria-readonly={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        className={classNames?.Input || ''}
      />

      <Styled.Switch alternative={alternative} className={classNames?.Switch || ''} />
    </Styled.Container>
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

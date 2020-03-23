import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { classNames, common, inputProps } from '../../utils';

import { Styled } from './styles';
import { radioGroupUtils } from './utils';

const RadioGroup = forwardRef(function RadioGroup(
  {
    id,
    name,
    options,
    value,
    defaultValue,
    direction = 'column',
    isRequired = false,
    isDisabled = false,
    isReversed = false,
    onChange,
    classNames,
    className = '',
  },
  ref
) {
  return (
    <Styled.RadioGroup dataDirection={direction} className={className} classNames={classNames}>
      {Object.values(options).map(option => (
        <Styled.RadioGroupItem key={option.value} classNames={classNames}>
          <Styled.Label classNames={classNames} isDisabled={option.isDisabled || isDisabled} isReversed={isReversed}>
            <Styled.Input
              ref={ref}
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={radioGroupUtils.isOptionSelected({ option, value: value ?? defaultValue })}
              onChange={() => onChange(option)}
              disabled={option.isDisabled || isDisabled}
              required={isRequired}
              aria-required={isRequired}
              aria-checked={radioGroupUtils.isOptionSelected({ option, value: value ?? defaultValue })}
              aria-labelledby={`${name} ${option}`}
              aria-disabled={option.isDisabled}
              classNames={classNames}
            />

            <Styled.RadioButton classNames={classNames} />

            {option?.label ?? option.value}
          </Styled.Label>
        </Styled.RadioGroupItem>
      ))}
    </Styled.RadioGroup>
  );
});

RadioGroup.displayName = 'RadioGroup';

const optionType = PropTypes.exact({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
});

RadioGroup.propTypes = {
  ...inputProps(optionType),
  options: PropTypes.objectOf(optionType),
  direction: common.direction,
  isReversed: PropTypes.bool,
  ...classNames(Object.keys(Styled)),
};

RadioGroup.defaultProps = {
  direction: 'column',
  isDisabled: false,
  isRequired: false,
  isReversed: false,
};

export default RadioGroup;

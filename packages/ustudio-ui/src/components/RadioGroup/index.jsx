import React, { forwardRef, useState, useEffect } from 'react';
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
    styled,
    classNames,
    className = '',
  },
  ref
) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? Object.values(options)[0]);

  useEffect(() => {
    onChange(internalValue);
  }, []);

  return (
    <Styled.RadioGroup dataDirection={direction} className={className} $classNames={classNames} $styled={styled}>
      {Object.values(options).map(option => (
        <Styled.RadioGroupItem key={option.value} $classNames={classNames} $styled={styled}>
          <Styled.Label
            $classNames={classNames}
            isDisabled={option.isDisabled || isDisabled}
            isReversed={isReversed}
            $styled={styled}
          >
            <Styled.Input
              ref={ref}
              type="radio"
              id={`${id || name}-${option.value}`}
              name={name}
              value={option.value}
              defaultChecked={radioGroupUtils.isOptionSelected({ option, value: internalValue })}
              onChange={() => {
                setInternalValue(option);
                onChange(option);
              }}
              disabled={option.isDisabled || isDisabled}
              required={isRequired}
              aria-required={isRequired}
              aria-checked={radioGroupUtils.isOptionSelected({ option, value: internalValue })}
              aria-labelledby={`${name} ${option.value}`}
              aria-disabled={option.isDisabled}
              $classNames={classNames}
              $styled={styled}
            />

            <Styled.RadioButton $classNames={classNames} $styled={styled} />

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
  name: PropTypes.string.isRequired,
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

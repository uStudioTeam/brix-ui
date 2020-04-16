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
    classNames,
    className = '',
  },
  ref
) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? Object.values(options)[0]);

  useEffect(() => {
    onChange(internalValue);
  }, []);

  console.log(internalValue, value);

  return (
    <Styled.RadioGroup dataDirection={direction} className={className} classNames={classNames}>
      {Object.values(options).map(option => (
        <Styled.RadioGroupItem key={option.value} classNames={classNames}>
          <Styled.Label classNames={classNames} isDisabled={option.isDisabled || isDisabled} isReversed={isReversed}>
            <Styled.Input
              ref={ref}
              type="radio"
              name={name || id}
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
              aria-labelledby={`${name || id} ${option.value}`}
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

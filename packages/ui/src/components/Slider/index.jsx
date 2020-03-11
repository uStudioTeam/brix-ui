import PropTypes from 'prop-types';
import React, { forwardRef, useEffect, useState } from 'react';

import { classNames, inputProps } from '../../utils';

import { Styled } from './styled';

const Slider = forwardRef(function Slider(
  {
    label,
    value,
    defaultValue,
    onChange,
    step = 1,
    displayValue = true,
    displaySteps = false,
    stepLabels,
    min = 0,
    max = 100,
    isDisabled = false,
    isRequired = false,
    classNames,
  },
  ref
) {
  function getValue() {
    return value ?? defaultValue;
  }

  const [usedValue, setUsedValue] = useState(getValue());
  const range = max - min;

  useEffect(() => {
    if (typeof getValue() !== 'undefined') {
      if (getValue() < min) {
        setUsedValue(min);
      } else if (getValue() > max) {
        setUsedValue(max);
      } else if (getValue() % step !== 0) {
        setUsedValue(+(getValue() - (getValue() % step)).toFixed(2));
      } else {
        setUsedValue(+getValue().toFixed(2));
      }
    }
  }, [value, defaultValue, max, min, step]);

  useEffect(() => {
    if (getValue()) setUsedValue(getValue());
  }, [value, defaultValue]);

  function renderSteps() {
    return (
      <Styled.StepContainer className={classNames?.StepContainer || ''}>
        {Array.from(Array(range / step + 1).keys()).map(index => {
          return (
            <Styled.Step
              isActive={index * step + min <= usedValue}
              dataDisplay={stepLabels?.[index * step]?.isDisplayed ?? true}
              dataLabel={stepLabels?.[index * step]?.label}
              key={index * step}
              className={classNames?.Step || ''}
              style={{
                left: `${(step / range) * index * 100}%`,
              }}
            />
          );
        })}
      </Styled.StepContainer>
    );
  }

  return (
    <Styled.Container className={classNames?.Container || ''} isDisabled={isDisabled}>
      <Styled.InputContainer className={classNames?.InputContainer || ''}>
        <Styled.HelperContainer className={classNames?.HelperContainer || ''}>
          <Styled.Helper isDisabled={isDisabled} className={classNames?.Helper || ''}>
            <Styled.Line
              style={{ width: `${((usedValue - min) * 100) / range}%` }}
              className={classNames?.Line || ''}
            />

            {displaySteps && renderSteps()}
          </Styled.Helper>
        </Styled.HelperContainer>

        <Styled.Input
          ref={ref}
          type="range"
          name={label}
          value={usedValue}
          onChange={({ currentTarget: { valueAsNumber } }) => onChange && onChange(+valueAsNumber.toFixed(2))}
          step={step}
          min={min}
          max={max}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          required={isRequired}
          aria-required={isRequired}
          aria-labelledby={`${label} slider`}
          className={classNames?.Input || ''}
        />
      </Styled.InputContainer>

      <Styled.Value variant="small" classNames={{ Text: classNames?.Value || '' }}>
        {usedValue}
      </Styled.Value>
    </Styled.Container>
  );
});

Slider.displayName = 'Slider';

Slider.propTypes = {
  ...inputProps(PropTypes.number),
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  displayValue: PropTypes.bool,
  displaySteps: PropTypes.bool,
  stepLabels: PropTypes.objectOf(PropTypes.exact({ label: PropTypes.string, isDisplayed: PropTypes.bool })),
  ...classNames(Object.keys(Styled)),
};

Slider.defaultProps = {
  step: 1,
  min: 0,
  max: 100,
  displayValue: true,
  displaySteps: false,
  isDisabled: false,
  isRequired: false,
};

export default Slider;

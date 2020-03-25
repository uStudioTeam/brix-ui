import PropTypes from 'prop-types';
import React, { forwardRef, useEffect, useState } from 'react';

import { classNames, inputProps } from '../../utils';

import { Styled } from './styles';
import { sliderUtils } from './utils';

const Slider = forwardRef(function Slider(
  {
    id,
    name,
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
    className = '',
  },
  ref
) {
  const [usedValue, setUsedValue] = useState(sliderUtils.getValue({ value, defaultValue }));
  const range = max - min;

  useEffect(() => {
    sliderUtils.validateValue(setUsedValue, { max, min, step, value, defaultValue });
  }, [value, defaultValue, max, min, step]);

  useEffect(() => {
    const resolvedValue = sliderUtils.getValue({ value, defaultValue });

    if (resolvedValue) {
      setUsedValue(resolvedValue);
    }
  }, [value, defaultValue]);

  const renderSteps = () => {
    return (
      <Styled.StepContainer classNames={classNames}>
        {sliderUtils.createSteps({ range, step }).map(index => {
          const currentStepLabel = stepLabels?.[index * step];

          return (
            <Styled.Step
              isActive={index * step + min <= usedValue}
              dataDisplay={currentStepLabel?.isDisplayed ?? true}
              dataLabel={currentStepLabel?.label}
              key={index * step}
              classNames={classNames}
              style={{
                left: `${(step / range) * index * 100}%`,
              }}
            />
          );
        })}
      </Styled.StepContainer>
    );
  };

  const handleChange = ({ currentTarget: { valueAsNumber } }) => onChange && onChange(+valueAsNumber.toFixed(2));

  return (
    <Styled.SliderContainer classNames={classNames} className={className} isDisabled={isDisabled}>
      <Styled.InputContainer classNames={classNames}>
        <Styled.HelperContainer classNames={classNames}>
          <Styled.Helper isDisabled={isDisabled} classNames={classNames}>
            <Styled.Line style={{ width: `${((usedValue - min) * 100) / range}%` }} classNames={classNames} />

            {displaySteps && renderSteps()}
          </Styled.Helper>
        </Styled.HelperContainer>

        <Styled.Input
          ref={ref}
          type="range"
          id={id}
          name={name}
          value={usedValue}
          onChange={handleChange}
          step={step}
          min={min}
          max={max}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          required={isRequired}
          aria-required={isRequired}
          aria-labelledby={name}
          classNames={classNames}
        />
      </Styled.InputContainer>

      <Styled.Value variant="small" classNames={{ Text: classNames?.Value || '' }}>
        {usedValue}
      </Styled.Value>
    </Styled.SliderContainer>
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

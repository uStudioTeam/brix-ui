const getValue = ({ value, defaultValue }) => {
  return value ?? defaultValue;
};

const validateValue = (setUsedValue, { min, max, step, ...value }) => {
  if (typeof getValue(value) !== 'undefined') {
    if (getValue(value) < min) {
      setUsedValue(min);
    } else if (getValue(value) > max) {
      setUsedValue(max);
    } else if (getValue(value) % step !== 0) {
      setUsedValue(+(getValue(value) - (getValue(value) % step)).toFixed(2));
    } else {
      setUsedValue(+getValue(value).toFixed(2));
    }
  }
};

const createSteps = ({ range, step }) => Array.from(Array(range / step + 1).keys());

export const sliderUtils = { getValue, validateValue, createSteps };

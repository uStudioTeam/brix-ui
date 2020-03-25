const getValue = ({ value, defaultValue }) => {
  return value ?? defaultValue;
};

const validateValue = (setUsedValue, { min, max, step, ...value }) => {
  const resolvedValue = getValue({ ...value });

  if (typeof resolvedValue !== 'undefined') {
    if (resolvedValue < min) {
      setUsedValue(min);
    } else if (resolvedValue > max) {
      setUsedValue(max);
    } else if (resolvedValue % step !== 0) {
      setUsedValue(+(resolvedValue - (resolvedValue % step)).toFixed(2));
    } else {
      setUsedValue(+resolvedValue.toFixed(2));
    }
  } else {
    setUsedValue(min);
  }
};

const createSteps = ({ range, step }) => Array.from(Array(range / step + 1).keys());

export const sliderUtils = { getValue, validateValue, createSteps };

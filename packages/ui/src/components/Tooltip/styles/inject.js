import { css } from 'styled-components';

const reversePosition = position => {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[position];
};

const sidePositions = position => {
  switch (position) {
    case 'top':
    case 'bottom':
      return ['left', 'right'];
    case 'left':
    case 'right':
    default:
      return ['top', 'bottom'];
  }
};

const translateByPosition = position => {
  return {
    top: css`translate(-50%, calc(-100% - 0.25rem))`,
    right: css`translate(calc(100% + 0.25rem), -50%)`,
    bottom: css`translate(-50%, calc(100% + 0.25rem))`,
    left: css`translate(calc(-100% - 0.25rem), -50%)`,
  }[position];
};

const sideBordersByPosition = position => {
  return sidePositions(reversePosition(position)).reduce(
    (map, pos) => `
        ${map}
        border-${pos}: 0.5rem solid transparent;
      `,
    ''
  );
};

const indent = position => {
  if (position === 'left' || position === 'right') {
    // move sideways
    return `${position}: -0.25rem; top: 50%`;
  }
  if (position === 'top' || position === 'bottom') {
    // center horizontally
    return `${position}: -0.25rem; left: 50%;`;
  }
};

const compensateCentring = position => {
  return `transform: translate${position === 'left' || position === 'right' ? 'Y' : 'X'}(-50%)`;
};

export const inject = {
  reversePosition,
  sidePositions,
  translateByPosition,
  sideBordersByPosition,
  indent,
  compensateCentring,
};

import { css } from 'styled-components';
import { sc } from '../../../utils';

function getSize({ size = 'small' }) {
  return {
    small: 10,
    medium: 12,
    large: 18,
  }[size];
}

const Icon = sc('span')(
  ({ size, angle }) => css`
    display: inline-block;

    width: ${getSize({ size })}px;
    height: ${getSize({ size })}px;

    transform: rotate(${angle}deg);
    transform-origin: center center;
  `
)('Icon');

export const Styled = { Icon };

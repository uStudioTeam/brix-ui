import { css } from 'styled-components';
import { getAlignmentFromDirection, parseAlignment, reverseDirection } from './index';

function getAlignmentValue(direction, alignment) {
  return `${parseAlignment(alignment?.[getAlignmentFromDirection(direction)]) || 'initial'}`;
}

export function getAlignment({ direction, alignment }) {
  return css`
    align-items: ${getAlignmentValue(reverseDirection(direction), alignment)};
    justify-content: ${getAlignmentValue(direction, alignment)};
  `;
}

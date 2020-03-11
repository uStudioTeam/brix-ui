import { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { minMax } from '../../../utils/min-max';

export function getCellTemplate({ gridDirection, divideBy, cellIndex, cellsCount, offset, size }) {
  if (gridDirection === 'column') {
    return 'grid-row: auto';
  }
  
  const minCellSize = 1;
  const maxCellSize = divideBy * cellsCount - (cellsCount - 1);
  
  const minCellStart = cellIndex + 1;
  const maxCellStart = divideBy * cellsCount;
  
  const defaultCellStart = divideBy * cellIndex + 1;
  const defaultCellSize = divideBy;
  
  function getTemplate({ size = defaultCellSize, before: offsetBefore = 0, after: offsetAfter = 0 }) {
    return css`
      grid-column: ${minMax(minCellStart, defaultCellStart + offsetBefore, maxCellStart)} / span
        ${minMax(minCellSize, size - offsetAfter, maxCellSize)};
    `;
  }
  
  return ['md', 'lg', 'xl'].reduce(
    (style, breakpoint) => {
      return css`
        ${style}

        ${Mixin.Screen[breakpoint](css`
          ${getTemplate({ size: size?.[breakpoint], ...offset?.[breakpoint] })}
        `)};
      `;
    },
    css`
      ${getTemplate({ size: size?.xs, ...offset?.xs })}
    `
  );
}

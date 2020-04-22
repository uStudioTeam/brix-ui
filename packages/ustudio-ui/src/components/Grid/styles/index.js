import { css } from 'styled-components';
import { sc } from '../../../utils';

import { getIndentations } from '../../../utils/get-indentations';
import { inject } from './inject';

const Cell = sc('div')(
  ({ index, cellsSizes, gridBreakpoints, breakpoints, offsets }) => css`
    display: flex;

    ${inject.cellTemplate({ cellsSizes, index, gridBreakpoints, breakpoints, offsets })};
  `
)('Cell');

const Grid = sc('div')(
  ({ divisions, isContainer, cellsCount, breakpoints, margin, padding }) => css`
    display: grid;
    width: 100%;

    ${inject.gridBreakpointTemplate({ divisions, isContainer, cellsCount, breakpoints })};

    ${isContainer
      ? css`
          ${inject.gridContainerStyles({ breakpoints })};

          margin-left: auto;
          margin-right: auto;
        `
      : ''};

    ${getIndentations({ type: 'margin', indentObj: margin })}
    ${getIndentations({ type: 'padding', indentObj: padding })}
  `
)('Grid');

export const Styled = { Cell, Grid };

import styled, { css } from 'styled-components';
import { inject } from './inject';

const Cell = styled.div(
  ({ index, cellsSizes, gridBreakpoints, breakpoints }) => css`
    display: flex;

    ${inject.cellTemplate({ cellsSizes, index, gridBreakpoints, breakpoints })};
  `
);

Cell.displayName = 'Cell';

const Grid = styled.div(
  ({ divisions, isContainer, cellsCount, breakpoints }) => css`
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
  `
);

Grid.displayName = 'Grid';

export const Styled = { Cell, Grid };

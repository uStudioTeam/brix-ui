import styled, { css } from 'styled-components';
import { inject } from './inject';

const Cell = styled.div.withConfig({ displayName: 'Cell' })(
  ({ index, cellsSizes, gridBreakpoints, breakpoints }) => css`
    display: flex;

    ${inject.cellTemplate({ cellsSizes, index, gridBreakpoints, breakpoints })};
  `
);

const Grid = styled.div.withConfig({ displayName: 'Grid' })(
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

export const Styled = { Cell, Grid };

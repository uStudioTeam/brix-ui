import styled, { css } from 'styled-components';
import { StyledComponents } from '../../../utils/styles/styled-component';
import { inject } from './inject';

const Cell = styled.div(
  ({ index, cellsSizes, gridBreakpoints, breakpoints, offsets }) => css`
    display: flex;

    ${inject.cellTemplate({ cellsSizes, index, gridBreakpoints, breakpoints, offsets })};
  `
);

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

export const Styled = StyledComponents({ Cell, Grid });

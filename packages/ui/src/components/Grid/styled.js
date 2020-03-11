import styled, { css } from 'styled-components';
import { getAlignment } from '../../utils';
import { getCellTemplate, getGridTemplate } from './utils';

const Cell = styled.div.withConfig({ displayName: 'Cell' })(
  ({
    dataDirection: direction,
    isReversed,
    alignment,
    gridDirection,
    divideBy,
    cellIndex,
    cellsCount,
    offset,
    xs,
    md,
    lg,
    xl,
  }) => css`
    display: flex;
    flex-direction: ${direction || 'column'} ${isReversed ? '-reverse' : ''};

    ${getCellTemplate({
      gridDirection,
      divideBy,
      cellIndex,
      cellsCount,
      offset,
      size: { xs, md, lg, xl },
    })};

    ${getAlignment({ direction, alignment })};
  `
);

const Grid = styled.div.withConfig({ displayName: 'Grid' })(
  ({ dataDirection: direction, alignment, gap = 0, divideBy, cellsCount }) => css`
    width: 100%;
    height: auto;
    flex: 1;

    display: grid;
    grid-gap: ${gap ? `${gap / 16}rem` : gap};
    ${getGridTemplate({ direction, divideBy, cellsCount })};

    ${getAlignment({ direction, alignment })}
  `
);

export const Styled = { Grid, Cell };

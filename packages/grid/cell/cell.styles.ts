import styled, { css } from 'styled-components';
import { Direction } from '@ustudio-ui/types/css';
import { Values } from '@ustudio-ui/utils/types';

import type { GridState } from '../area-builder/reducer';

import type { CellProps } from './cell.props';

const Cell = styled.div<{
  area: CellProps['area'];
  areas: GridState['areas'];
  $size: CellProps['size'];
  $direction?: Values<typeof Direction>;
}>(({ area, areas, $size, $direction }) => {
  if (!$size || $size === 1) {
    return css`
      grid-area: ${area};
    `;
  }

  const direction = $direction === 'row' ? 'column' : 'row';

  return css`
    grid-${direction}: ${areas.indexOf(`${area}s`) + 1} / ${areas.indexOf(`${area}e`) + 2};
  `;
});

const Styled = { Cell };

export default Styled;

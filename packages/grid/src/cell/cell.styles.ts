import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { Direction } from '@ustudio-ui/types/css';
import { Values } from '@ustudio-ui/utils/types';

import type { AreaBuilderState } from '../area-builder/reducer';

import type { CellProps } from './cell.props';

const Cell = styled.div<{
  area: CellProps['area'];
  areas: AreaBuilderState['areas'];
  $size: CellProps['size'];
  $direction?: Values<typeof Direction>;
}>(({ area, areas, $size, $direction }) => {
  if (!$size || $size === 1) {
    return css`
      grid-area: ${area};
    `;
  }

  const templateDirection = $direction === Direction.Column ? Direction.Row : Direction.Column;

  return css`
    grid-${templateDirection}: ${areas.indexOf(`${area}s`) + 1} / ${areas.indexOf(`${area}e`) + 2};
  `;
});

const Styled = applyDisplayNames({ Cell });

export default Styled;

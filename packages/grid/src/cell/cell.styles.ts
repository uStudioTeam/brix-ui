import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { Direction } from '@brix-ui/types/css';

import type { AreaBuilderState } from '../area-builder/reducer';

import type { CellProps } from './cell.props';

const Cell = styled.div<{
  area: CellProps['area'];
  areas: AreaBuilderState['areas'];
  direction?: CellProps['direction'];
  $size: CellProps['size'];
}>(({ area, areas, $size: size, direction }) => {
  if (!size || size === 1) {
    return css`
      grid-area: ${area};
    `;
  }

  const templateDirection = direction === Direction.Column ? Direction.Row : Direction.Column;

  return css`
    grid-${templateDirection}: ${areas.indexOf(`${area}s`) + 1} / ${areas.indexOf(`${area}e`) + 2};
  `;
});

const Styled = applyDisplayNames({ Cell });

export default Styled;

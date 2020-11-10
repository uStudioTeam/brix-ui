import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { Direction } from '@brix-ui/types/css';
import Flex from '@brix-ui/core/flex';

import type { GridProps } from './grid.props';

const Grid = styled(Flex)<{
  $gap: GridProps['gap'];
  $maxWidth: Extract<GridProps['maxWidth'], string> | undefined;
  template: Extract<GridProps['template'], string> | undefined;
  areas: string;
  fractionsCount: number;
}>(({ direction, $gap: gap, $maxWidth: maxWidth, areas, template, fractionsCount }) => {
  const templateDirection = direction === Direction.Column ? Direction.Row : Direction.Column;

  return css`
    display: grid;

    grid-gap: ${gap};

    grid-template-areas: ${areas};
    ${`grid-template-${templateDirection}s`}: ${template || `repeat(${fractionsCount}, 1fr)`};

    max-width: ${maxWidth};

    &[data-inline] {
      display: inline-grid;
    }
  `;
});

const Styled = applyDisplayNames({ Grid });

export default Styled;

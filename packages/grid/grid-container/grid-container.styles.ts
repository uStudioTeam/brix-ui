import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import Block from '@ustudio-ui/core/block';
import { Direction } from '@ustudio-ui/types/css';

import type { GridContainerProps } from './grid-container.props';

const parseGap = (gap: GridContainerProps['gap']): FlattenSimpleInterpolation => {
  if (typeof gap === 'string') {
    return css`
      grid-gap: ${gap};
    `;
  }

  return css`
    grid-row-gap: ${gap?.vertical};
    grid-column-gap: ${gap?.horizontal};
  `;
};

const GridContainer = styled(Block)<{
  $direction: GridContainerProps['direction'];
  $gap: GridContainerProps['gap'];
  $maxWidth: Extract<GridContainerProps['maxWidth'], string> | undefined;
  template: Extract<GridContainerProps['template'], string> | undefined;
  areas: string;
  fractionsCount: number;
}>(({ $direction, $gap, $maxWidth, areas, template, fractionsCount }) => {
  return css`
    display: grid;

    ${parseGap($gap)};

    grid-template-areas: ${areas};
    ${`grid-template-${$direction === Direction.Column ? 'rows' : 'columns'}`}: ${template ||
    `repeat(${fractionsCount}, 1fr)`};

    max-width: ${$maxWidth};
  `;
});

const Styled = { GridContainer };

export default Styled;

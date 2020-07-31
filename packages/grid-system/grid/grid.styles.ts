import styled, { css } from 'styled-components';
import Block from '@ustudio-ui/core/block';

import type { GridProps } from './grid.props';

const Grid = styled(Block)<{
  $direction: GridProps['direction'];
  $gap: GridProps['gap'];
  template: Extract<GridProps['template'], string> | undefined;
  areas: string;
  fractionsCount: number;
}>(({ $direction, $gap, areas, template, fractionsCount }) => {
  return css`
    display: grid;

    grid-gap: ${$gap};
    grid-template-areas: ${areas};
    ${`grid-template-${$direction === 'column' ? 'rows' : 'columns'}`}: ${template || `repeat(${fractionsCount}, 1fr)`};
  `;
});

const Styled = { Grid };

export default Styled;

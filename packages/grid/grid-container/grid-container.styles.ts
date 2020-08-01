import styled, { css } from 'styled-components';
import Block from '@ustudio-ui/core/block';

import type { GridContainerProps } from './grid-container.props';

const GridContainer = styled(Block)<{
  $direction: GridContainerProps['direction'];
  $gap: GridContainerProps['gap'];
  template: Extract<GridContainerProps['template'], string> | undefined;
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

const Styled = { GridContainer };

export default Styled;

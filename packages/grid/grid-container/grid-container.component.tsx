import React, { FC, forwardRef, MutableRefObject, useMemo } from 'react';

import { polymorphicFunction } from '@ustudio-ui/utils/functions';
import type { With } from '@ustudio-ui/utils/types';
import DirectionContext from '@ustudio-ui/contexts/direction';
import { Direction } from '@ustudio-ui/types/css';

import { useGrid, GridProvider } from '../grid';
import { useBreakpointProps } from '../hooks';

import type { GridContainerBreakpointData, GridContainerProps } from './grid-container.props';
import Styled from './grid-container.styles';

const GridContainer: FC<GridContainerProps> = forwardRef(function GridContainer(
  { children, as, direction, gap, template, maxWidth, sm, md, lg, xl, ...props },
  ref: MutableRefObject<HTMLElement>
) {
  const [grid, dispatcher] = useGrid();

  const areas = useMemo(() => {
    if (direction === Direction.Row || direction === undefined) {
      return `'${grid.areas.join('  ')}'`;
    }

    return grid.areas.map((area) => `'${area}'`).join(' ');
  }, [grid.areas, direction]);

  const { currentBreakpoint, ...currentBreakpointProps } = useBreakpointProps({
    sm,
    md,
    lg,
    xl,
    direction,
    gap,
    template,
    maxWidth,
  }) as With<GridContainerBreakpointData, { currentBreakpoint: number }>;

  return (
    <DirectionContext value={direction}>
      <GridProvider areas={grid.areas} dispatcher={dispatcher}>
        <Styled.GridContainer
          ref={ref}
          forwardedAs={as}
          $direction={currentBreakpointProps.direction}
          $gap={currentBreakpointProps.gap}
          $maxWidth={polymorphicFunction(currentBreakpointProps.maxWidth, currentBreakpoint)}
          template={polymorphicFunction(currentBreakpointProps.template, grid.fractionsCount)}
          areas={areas}
          fractionsCount={grid.fractionsCount}
          {...props}
        >
          {children}
        </Styled.GridContainer>
      </GridProvider>
    </DirectionContext>
  );
});

export default GridContainer;

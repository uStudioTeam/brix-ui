import React, { useMemo } from 'react';

import { applyPolymorphicFunctionProp, intrinsicComponent } from '@ustudio-ui/utils/functions';
import type { With } from '@ustudio-ui/utils/types';
import DirectionContext from '@ustudio-ui/contexts/direction';
import { Direction } from '@ustudio-ui/types/css';

import { useAreaBuilder, AreaBuilder } from '../area-builder';
import { useBreakpointProps } from '../hooks';

import type { GridBreakpointData, GridProps } from './grid.props';
import Styled from './grid.styles';

const Grid = intrinsicComponent<GridProps>(function Grid(
  { children, as, direction, gap, template, maxWidth, sm, md, lg, xl, ...props },
  ref
) {
  const [grid, dispatcher] = useAreaBuilder();

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
  }) as With<GridBreakpointData, { currentBreakpoint: number }>;

  return (
    <DirectionContext value={direction}>
      <AreaBuilder areas={grid.areas} dispatcher={dispatcher}>
        <Styled.Grid
          ref={ref}
          forwardedAs={as}
          $direction={currentBreakpointProps.direction}
          $gap={currentBreakpointProps.gap}
          $maxWidth={applyPolymorphicFunctionProp(currentBreakpointProps.maxWidth, currentBreakpoint)}
          template={applyPolymorphicFunctionProp(currentBreakpointProps.template, grid.fractionsCount)}
          areas={areas}
          fractionsCount={grid.fractionsCount}
          {...props}
        >
          {children}
        </Styled.Grid>
      </AreaBuilder>
    </DirectionContext>
  );
});

export default Grid;

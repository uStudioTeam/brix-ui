import React, { useMemo, WeakValidationMap } from 'react';
import PT from 'prop-types';

import { applyPolymorphicFunctionProp, intrinsicComponent, objectValues } from '@ustudio-ui/utils/functions';
import type { With } from '@ustudio-ui/utils/types';
import { extract } from '@ustudio-ui/utils/prop-types';
import DirectionProvider from '@ustudio-ui/contexts/direction';
import { Direction } from '@ustudio-ui/types/css';
import { breakpointProps, stylableComponent } from '@ustudio-ui/types/prop-types';
import Block from '@ustudio-ui/core/block';

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
    if (direction === Direction.Column) {
      return grid.areas.map((area) => `'${area}'`).join(' ');
    }

    return `'${grid.areas.join('  ')}'`;
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
    <DirectionProvider value={direction}>
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
    </DirectionProvider>
  );
});

const { gap, isInline: _, ...blockPropTypes } = extract(Block);

const gridBreakpointData = {
  gap,
  direction: PT.oneOf(objectValues(Direction)),
  template: PT.oneOfType([PT.string, PT.func]),
  maxWidth: PT.oneOfType([PT.string, PT.func]),
};

Grid.propTypes = {
  ...breakpointProps(gridBreakpointData),
  ...blockPropTypes,

  ...stylableComponent(),
} as WeakValidationMap<GridProps>;

export default Grid;

import { useTheme } from '@brix-ui/theme';
import React, { useMemo, WeakValidationMap } from 'react';
import PT from 'prop-types';

import { applyPolymorphicFunctionProp, intrinsicComponent, objectValues } from '@brix-ui/utils/functions';
import type { With } from '@brix-ui/utils/types';
import { extract } from '@brix-ui/prop-types/utils';
import { breakpointProps, stylableComponent } from '@brix-ui/prop-types/common';
import Direction from '@brix-ui/contexts/direction';
import { Direction as DirectionType } from '@brix-ui/types/css';
import Block from '@brix-ui/core/block';
import useBreakpointProps from '@brix-ui/hooks/use-breakpoint-props';

import { useAreaBuilder, AreaBuilder } from '../area-builder';

import type { GridBreakpointProps, GridProps } from './grid.props';
import Styled from './grid.styles';

const Grid = intrinsicComponent<GridProps>(function Grid(
  { children, as, direction, gap, template, maxWidth, sm, md, lg, xl, ...props },
  ref
) {
  const [grid, dispatcher] = useAreaBuilder();

  const areas = useMemo(() => {
    if (direction === DirectionType.Column) {
      return grid.areas.map((area) => `'${area}'`).join(' ');
    }

    return `'${grid.areas.join('  ')}'`;
  }, [grid.areas, direction]);

  const { breakpoints } = useTheme();

  const { currentBreakpoint, ...currentBreakpointProps } = useBreakpointProps(
    {
      sm,
      md,
      lg,
      xl,
      direction,
      gap,
      template,
      maxWidth,
    },
    breakpoints
  ) as With<GridBreakpointProps, { currentBreakpoint: number }>;

  return (
    <Direction value={direction}>
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
    </Direction>
  );
});

const { gap, isInline: _, ...blockPropTypes } = extract([Block]);

const gridBreakpointData = {
  gap,
  direction: PT.oneOf(objectValues(DirectionType)),
  template: PT.oneOfType([PT.string, PT.func]),
  maxWidth: PT.oneOfType([PT.string, PT.func]),
};

Grid.propTypes = {
  ...breakpointProps(gridBreakpointData),
  ...blockPropTypes,

  ...stylableComponent(),
} as WeakValidationMap<GridProps>;

export default Grid;

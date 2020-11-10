import React, { useMemo, WeakValidationMap } from 'react';

import { applyPolymorphicFunctionProp, classNames, intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
import type { With } from '@brix-ui/utils/types';
import { extract } from '@brix-ui/prop-types/utils';
import { breakpointProps, stylableComponent, polymorphicBreakpointProp, gapable } from '@brix-ui/prop-types/common';
import Flex from '@brix-ui/core/flex';
import useBreakpointProps from '@brix-ui/hooks/use-breakpoint-props';
import { useTheme } from '@brix-ui/theme/hooks';
import { Direction } from '@brix-ui/types/css';

import { useAreaBuilder, AreaBuilder } from '../area-builder';

import type { GridBreakpointProps, GridProps } from './grid.props';
import Styled from './grid.styles';

const Grid = intrinsicComponent<GridProps>(function Grid(
  { children, className, as, direction, isInline, gap, template, maxWidth, sm, md, lg, xl, ...props },
  ref
) {
  const [grid, dispatcher] = useAreaBuilder();

  const areas = useMemo(() => {
    if (direction === Direction.Column) {
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
    <AreaBuilder areas={grid.areas} dispatcher={dispatcher}>
      <Styled.Grid
        ref={ref}
        forwardedAs={as}
        className={classNames('grid', className)}
        direction={currentBreakpointProps.direction}
        $gap={currentBreakpointProps.gap}
        $maxWidth={applyPolymorphicFunctionProp(currentBreakpointProps.maxWidth, currentBreakpoint)}
        template={applyPolymorphicFunctionProp(currentBreakpointProps.template, grid.fractionsCount)}
        areas={areas}
        fractionsCount={grid.fractionsCount}
        data-inline={orUndefined(isInline)}
        {...props}
      >
        {children}
      </Styled.Grid>
    </AreaBuilder>
  );
});

const { isReversed: _r, hasWrap: _w, ...flexPropTypes } = extract([Flex]);

const gridBreakpointData: WeakValidationMap<GridBreakpointProps> = {
  ...gapable,
  template: polymorphicBreakpointProp(),
  maxWidth: polymorphicBreakpointProp(),
};

Grid.propTypes = {
  ...breakpointProps(gridBreakpointData),
  ...flexPropTypes,

  ...stylableComponent(),
} as WeakValidationMap<GridProps>;

export default Grid;

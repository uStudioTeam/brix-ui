import React, { FC, forwardRef, Ref, useMemo } from 'react';

import { polymorphicFunction } from '@ustudio-ui/utils/functions';
import type { With } from '@ustudio-ui/utils/types';
import DirectionContext from '@ustudio-ui/contexts/direction';
import { Direction } from '@ustudio-ui/types/css';

import { useGrid, GridProvider } from '../grid';
import { useBreakpointProps } from '../hooks';

import type { GridContainerBreakpoints, GridContainerProps } from './grid-container.props';
import Styled from './grid-container.styles';

const GridContainer: FC<GridContainerProps> = forwardRef(function GridContainer(
  { children, as, direction, gap, template, maxWidth, sm, md, lg, xl, ...props },
  ref: Ref<HTMLElement>
) {
  const [state, dispatcher] = useGrid();

  const areas = useMemo(() => {
    if (direction === Direction.Row || direction === undefined) {
      return `'${state.areas.join('  ')}'`;
    }

    return state.areas.map((area) => `'${area}'`).join(' ');
  }, [state.areas]);

  const { currentBreakpoint, ...currentBreakpointProps } = useBreakpointProps({
    sm,
    md,
    lg,
    xl,
    direction,
    gap,
    template,
    maxWidth,
  }) as With<GridContainerBreakpoints, { currentBreakpoint: number }>;

  return (
    <DirectionContext value={direction}>
      <GridProvider areas={state.areas} dispatcher={dispatcher}>
        <Styled.GridContainer
          forwardedAs={as}
          ref={ref}
          $direction={currentBreakpointProps.direction}
          $gap={currentBreakpointProps.gap}
          $maxWidth={polymorphicFunction(currentBreakpointProps.maxWidth, currentBreakpoint)}
          template={polymorphicFunction(currentBreakpointProps.template, state.fractionsCount)}
          areas={areas}
          fractionsCount={state.fractionsCount}
          {...props}
        >
          {children}
        </Styled.GridContainer>
      </GridProvider>
    </DirectionContext>
  );
});

export default GridContainer;

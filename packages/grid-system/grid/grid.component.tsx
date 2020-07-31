import React, { FC, useMemo } from 'react';
import DirectionContext from '@ustudio-ui/contexts/direction';

import { useAreaBuilder, AreaBuilderProvider } from '../area-builder';
import { useBreakpointProps } from '../hooks';

import type { GridBreakpoints, GridProps } from './grid.props';
import Styled from './grid.styles';

const Grid: FC<GridProps> = ({ children, direction, gap, template, sm, md, lg, xl, ...props }) => {
  const [state, dispatcher] = useAreaBuilder();

  const areas = useMemo(() => {
    if (direction === 'row' || direction === undefined) {
      return `'${state.areas.join('  ')}'`;
    }

    return state.areas.map((area) => `'${area}'`).join(' ');
  }, [state.areas]);

  const currentBreakpointProps = useBreakpointProps({
    sm,
    md,
    lg,
    xl,
    direction,
    gap,
    template,
  }) as GridBreakpoints;

  return (
    <DirectionContext value={direction}>
      <AreaBuilderProvider areas={state.areas} dispatcher={dispatcher}>
        <Styled.Grid
          $direction={currentBreakpointProps.direction}
          $gap={currentBreakpointProps.gap}
          template={
            typeof currentBreakpointProps.template === 'function'
              ? currentBreakpointProps.template(state.fractionsCount)
              : currentBreakpointProps.template
          }
          areas={areas}
          fractionsCount={state.fractionsCount}
          {...props}
        >
          {children}
        </Styled.Grid>
      </AreaBuilderProvider>
    </DirectionContext>
  );
};

export default Grid;

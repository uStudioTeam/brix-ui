import React, { FC, useMemo } from 'react';
import DirectionContext from '@ustudio-ui/contexts/direction';

import { useGrid, GridProvider } from '../grid';
import { useBreakpointProps } from '../hooks';

import type { GridContainerBreakpoints, GridContainerProps } from './grid-container.props';
import Styled from './grid-container.styles';

const GridContainer: FC<GridContainerProps> = ({ children, direction, gap, template, sm, md, lg, xl, ...props }) => {
  const [state, dispatcher] = useGrid();

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
  }) as GridContainerBreakpoints;

  return (
    <DirectionContext value={direction}>
      <GridProvider areas={state.areas} dispatcher={dispatcher}>
        <Styled.GridContainer
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
        </Styled.GridContainer>
      </GridProvider>
    </DirectionContext>
  );
};

export default GridContainer;

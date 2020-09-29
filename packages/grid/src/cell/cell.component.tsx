import { useTheme } from '@brix-ui/theme';
import React, { useEffect, useMemo, useRef, WeakValidationMap } from 'react';
import PT, { Requireable } from 'prop-types';

import { useDirection } from '@brix-ui/contexts/direction';
import { intrinsicComponent } from '@brix-ui/utils/functions';
import { breakpointProps, stylableComponent } from '@brix-ui/prop-types/common';
import useBreakpointProps from '@brix-ui/hooks/use-breakpoint-props';

import { useAreaBuilderContext } from '../area-builder';

import type { CellBreakpointProps, CellProps } from './cell.props';
import Styled from './cell.styles';

const Cell = intrinsicComponent<CellProps, HTMLDivElement>(function Cell(
  { children, area, size, offset, sm, md, lg, xl, ...props },
  ref
) {
  const { areas, dispatcher } = useAreaBuilderContext();

  const { breakpoints } = useTheme();

  const currentBreakpointProps = useBreakpointProps(
    {
      sm,
      md,
      lg,
      xl,
      size,
      offset,
    },
    breakpoints
  ) as CellBreakpointProps;

  const { current: internalId } = useRef(Math.random().toString(32).slice(2).replace(/\d+/, ''));
  const id = useMemo(() => area || internalId, [area]);

  useEffect(() => {
    dispatcher.mountCell({
      id,
      size: currentBreakpointProps.size,
      offset: currentBreakpointProps.offset,
    });
  }, [id]);

  const direction = useDirection();

  return (
    <Styled.Cell ref={ref} areas={areas} area={id} $size={size} $direction={direction} {...props}>
      {children}
    </Styled.Cell>
  );
});

const cellBreakpointData: WeakValidationMap<CellBreakpointProps> = {
  size: PT.number,
  offset: PT.arrayOf(PT.number) as Requireable<CellBreakpointProps['offset']>,
};

Cell.propTypes = {
  area: PT.string,
  ...breakpointProps(cellBreakpointData),

  ...stylableComponent(),
} as WeakValidationMap<CellProps>;

export default Cell;

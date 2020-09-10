import React, { useEffect, useMemo, useRef, WeakValidationMap } from 'react';
import PT, { Requireable } from 'prop-types';

import { useDirection } from '@ustudio-ui/contexts/direction';
import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import { breakpointProps, stylableComponent } from '@ustudio-ui/types/prop-types';

import { useAreaBuilderContext } from '../area-builder';
import { useBreakpointProps } from '../hooks';

import type { CellBreakpointData, CellProps } from './cell.props';
import Styled from './cell.styles';

const Cell = intrinsicComponent<CellProps, HTMLDivElement>(function Cell(
  { children, area, size, offset, sm, md, lg, xl, ...props },
  ref
) {
  const { areas, dispatcher } = useAreaBuilderContext();

  const currentBreakpointProps = useBreakpointProps({
    sm,
    md,
    lg,
    xl,
    size,
    offset,
  }) as CellBreakpointData;

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

const cellBreakpointData: WeakValidationMap<CellBreakpointData> = {
  size: PT.number,
  offset: PT.arrayOf(PT.number) as Requireable<CellBreakpointData['offset']>,
};

Cell.propTypes = {
  area: PT.string,
  ...breakpointProps(cellBreakpointData),

  ...stylableComponent(),
} as WeakValidationMap<CellProps>;

export default Cell;

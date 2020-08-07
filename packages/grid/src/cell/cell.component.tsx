import React, { FC, forwardRef, MutableRefObject, useEffect, useMemo, useRef } from 'react';

import { useDirection } from '@ustudio-ui/contexts/direction';

import { useAreaBuilderContext } from '../area-builder';
import { useBreakpointProps } from '../hooks';

import type { CellBreakpointData, CellProps } from './cell.props';
import Styled from './cell.styles';

const Cell: FC<CellProps> = forwardRef(function Cell(
  { children, area, size, offset, sm, md, lg, xl, ...props },
  ref: MutableRefObject<HTMLDivElement>
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

export default Cell;

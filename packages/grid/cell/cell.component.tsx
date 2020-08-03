import React, { FC, forwardRef, Ref, useEffect, useMemo } from 'react';

import { useDirection } from '@ustudio-ui/contexts/direction';

import { useGridContext } from '../grid';
import { useBreakpointProps } from '../hooks';

import type { CellBreakpointData, CellProps } from './cell.props';
import Styled from './cell.styles';

const Cell: FC<CellProps> = forwardRef(function Cell(
  { children, area, size, offset, sm, md, lg, xl, ...props },
  ref: Ref<HTMLDivElement>
) {
  const { areas, dispatcher } = useGridContext();

  const currentBreakpointProps = useBreakpointProps({
    sm,
    md,
    lg,
    xl,
    size,
    offset,
  }) as CellBreakpointData;

  const id = useMemo(() => area || Math.random().toString(32).slice(2).replace(/\d+/, ''), [area]);

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

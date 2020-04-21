import { ReactNode } from 'react';
import { Alignment, Breakpoint, Direction, Indentation } from '../../../theme/theme';
import Cell, { CellProps } from '../Cell';

type GridBreakpointData = {
  [breakpoint in Breakpoint]?: {
    template?: string;
    maxWidth?: number;
    direction?: Direction;
    gap?: number;
    alignment?: Alignment;
  };
};

interface GridProps extends GridBreakpointData {
  children: ReactNode<CellProps, typeof Cell> | ReactNode<CellProps, typeof Cell>[];

  isContainer?: boolean;

  margin?: Indentation;
  padding?: Indentation;

  className?: string;
}

declare const Grid: {
  (props: GridProps): JSX.Element;
};

export default Grid;

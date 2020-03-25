import { ReactElement } from 'react';
import { Alignment, Breakpoint, Direction } from '../../../theme/theme';
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
  children: ReactElement<CellProps, Cell> | ReactElement<CellProps, Cell>[];

  isContainer?: boolean;

  className?: string;
}

declare const Grid: {
  (props: GridProps): JSX.Element;
};

export default Grid;

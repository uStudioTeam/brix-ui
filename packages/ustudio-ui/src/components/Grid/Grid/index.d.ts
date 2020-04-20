import { ReactNode } from 'react';
import { Alignment, Breakpoint, Direction } from '../../../theme/theme';
import Cell, { CellProps } from '../Cell';
import { Indention } from '../../../../lib/theme/theme';

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

  margin?: Indention;
  padding: Indention;

  className?: string;
}

declare const Grid: {
  (props: GridProps): JSX.Element;
};

export default Grid;

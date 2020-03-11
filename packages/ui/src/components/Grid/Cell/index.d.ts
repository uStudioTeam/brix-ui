import { Alignment, Direction } from '../../../theme/theme';
import { BreakpointOffsets, BreakpointSizes, Children } from '../types';

interface CellProps extends BreakpointSizes {
  children: Children;
  
  direction?: Direction;
  isReversed?: boolean;
  
  alignment?: Alignment;
  
  offset?: BreakpointOffsets;
  
  className?: string;
}

declare const Cell: {
  (props: CellProps): JSX.Element;
};

export default Cell;

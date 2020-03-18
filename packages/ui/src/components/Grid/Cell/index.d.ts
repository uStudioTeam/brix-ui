import { Breakpoint } from '../../../theme/theme';
import { Children, Offset, Size } from '../types';

type CellBreakpointData = {
  [breakpoint in Breakpoint]?: {
    size?: Size;
    offset?: Offset;
  }
}

interface CellProps extends CellBreakpointData {
  children: Children;
  
  className?: string;
}

declare const Cell: {
  (props: CellProps): JSX.Element;
};

export default Cell;

import { ReactElement } from 'react';
import { Breakpoint } from '../../../theme/theme';

type Size = number;
type Offset =
  | {
      before: Size;
      after?: Size;
    }
  | {
      before?: Size;
      after: Size;
    }
  | {
      before: Size;
      after: Size;
    };

type CellBreakpointData = {
  [breakpoint in Breakpoint]?: {
    size?: Size;
    offset?: Offset;
  };
};

export interface CellProps extends CellBreakpointData {
  children: ReactElement | ReactElement[];

  className?: string;
}

declare const Cell: {
  (props: CellProps): JSX.Element;
};

export default Cell;

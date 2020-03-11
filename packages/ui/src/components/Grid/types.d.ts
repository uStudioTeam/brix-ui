import { ReactElement } from 'react';
import { Breakpoint } from '../../theme/theme';

type Children = ReactElement[] | ReactElement;
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

type BreakpointSizes = { [breakpoint in Breakpoint]?: Size };
type BreakpointOffsets = { [breakpoint in Breakpoint]?: Offset };

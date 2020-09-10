import PT, { Requireable } from 'prop-types';

import type { BreakpointsProps } from '../component';
import { Breakpoint } from '../css';

export const breakpointProps = <P>(props: P): P & BreakpointsProps<Requireable<P>> => {
  return {
    ...props,
    ...[Breakpoint.Sm, Breakpoint.Md, Breakpoint.Lg, Breakpoint.Xl].reduce((breakpointsMap, breakpoint) => {
      return Object.assign(breakpointsMap, {
        [breakpoint]: PT.exact(props),
      });
    }, {} as BreakpointsProps<Requireable<P>>),
  };
};

import PT, { Requireable } from 'prop-types';

import type { BreakpointsProps } from '@brix-ui/types/component';
import { Breakpoint } from '@brix-ui/types/css';
import { WeakValidationMap } from 'react';

export const breakpointProps = <P>(props: P): WeakValidationMap<BreakpointsProps<P>> => {
  return {
    ...props,
    ...[Breakpoint.Sm, Breakpoint.Md, Breakpoint.Lg, Breakpoint.Xl].reduce((breakpointsMap, breakpoint) => {
      return Object.assign(breakpointsMap, {
        [breakpoint]: PT.exact(props),
      });
    }, {} as BreakpointsProps<Requireable<P>>),
  };
};

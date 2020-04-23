import { Mixin } from '../../../theme';

export const reduceBreakpointsToObject = breakpointCallback =>
  Object.keys(Mixin.Screen).reduce(
    (destinationObject, breakpoint) => Object.assign(destinationObject, breakpointCallback(breakpoint)),
    {}
  );

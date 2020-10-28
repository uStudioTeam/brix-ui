import PT, { Requireable } from 'prop-types';

import type { PolymorphicBreakpointProp } from '@brix-ui/types/component';

export const polymorphicBreakpointProp = <T = string>(): Requireable<PolymorphicBreakpointProp<T>> => {
  return PT.oneOfType([PT.func, PT.string]) as Requireable<PolymorphicBreakpointProp<T>>;
};

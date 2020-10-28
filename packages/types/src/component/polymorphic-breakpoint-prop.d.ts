export type PolymorphicBreakpointProp<T = string> = ((currentBreakpoint: number) => T) | T;

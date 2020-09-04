export const applyPolymorphicFunctionProp = <A, T, F extends (...args: A[]) => T>(
  prop: T | F | undefined,
  callWith: A
): T | undefined => {
  return typeof prop === 'function' ? (prop as F)(callWith) : prop;
};

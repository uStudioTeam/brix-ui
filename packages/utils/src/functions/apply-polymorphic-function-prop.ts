export const applyPolymorphicFunctionProp = <T, F extends (...args: any[]) => T>(
  prop: F | T | undefined,
  ...args: Parameters<F>
): Exclude<typeof prop, F> => {
  return (typeof prop === 'function' ? (prop as F)(...args) : prop) as Exclude<typeof prop, F>;
};

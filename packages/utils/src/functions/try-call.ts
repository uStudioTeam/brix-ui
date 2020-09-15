export const tryCall = <F extends (...args: any[]) => any>(
  fn: F | undefined,
  ...args: Parameters<F>
): ReturnType<F> | void => {
  if (fn) {
    return fn(...args);
  }
};

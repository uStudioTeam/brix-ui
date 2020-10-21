/**
 * Calls a function with given arguments if it's not undefined
 */
export function tryCall<F extends (...args: any[]) => any>(
  fn: F | undefined,
  ...args: Parameters<F>
): ReturnType<F> | void {
  if (fn) {
    return fn(...args);
  }
}

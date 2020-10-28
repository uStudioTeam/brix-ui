/**
 * Returns either `true` or `undefined`.
 * Useful for some HTML attributes
 */
export function orUndefined<V>(value: V | undefined): true | undefined {
  return Boolean(value) || undefined;
}

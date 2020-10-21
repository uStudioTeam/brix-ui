/**
 * Returns a number in the range from min to max
 */
export function minMax(...[min, value, max]: [number, number, number]): number {
  return Math.max(min, Math.min(value, max));
}

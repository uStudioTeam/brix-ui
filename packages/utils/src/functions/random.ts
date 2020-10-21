/**
 * Returns a random number in the range of [min, max]
 */
export function random(min = 0, max = 1): number {
  return Math.round(Math.random() * (max - min) + min);
}

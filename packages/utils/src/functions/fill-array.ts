/**
 * Fills array with numbers for the given length
 */
export function fillArray(length: number): number[] {
  return [...new Array(length).keys()];
}

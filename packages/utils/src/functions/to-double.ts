/**
 * Converts '1' to '01'
 * Leaves '10' as is
 */
export function toDouble(number: number): string {
  return number < 10 ? `0${number}` : `${number}`;
}

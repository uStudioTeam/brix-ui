/**
 * Transforms the first symbol of a string to upper case
 */
export function capitalize<S extends string>(string: S): string {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

export function isUndefined<V>(value: V | undefined): value is undefined {
  return value === undefined;
}

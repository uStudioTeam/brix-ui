export function orUndefined<V>(value: V | undefined): true | undefined {
  return Boolean(value) || undefined;
}

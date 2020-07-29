export const safeFallback = <T, F = undefined, R = F extends undefined ? T | '' : T | F>(
  condition: boolean | undefined,
  truthy: T,
  falsy?: F
): R => {
  if (falsy === undefined) {
    return ((condition ? truthy : '') as unknown) as R;
  }

  return ((condition ? truthy : falsy) as unknown) as R;
};

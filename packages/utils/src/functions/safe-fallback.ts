export const safeFallback = <C = boolean, T = '', F = undefined, R = F extends undefined ? T | '' : T | F>(
  condition: C | undefined,
  truthy?: T,
  falsy?: F
): R => {
  if (condition === undefined) {
    return ('' as unknown) as R;
  }

  if (truthy === undefined && falsy === undefined) {
    return (condition as unknown) as R;
  }

  if (falsy === undefined) {
    return ((condition ? truthy : '') as unknown) as R;
  }

  return ((condition ? truthy : falsy) as unknown) as R;
};

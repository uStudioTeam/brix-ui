export const record = <T extends string, P>(keys: T[], valueType: P): Record<T, P> => {
  return keys.reduce((toObject, key) => {
    return Object.assign(toObject, {
      [key]: valueType,
    });
  }, {} as Record<T, P>);
};

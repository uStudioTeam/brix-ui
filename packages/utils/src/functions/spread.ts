/**
 * Spreads multiple objects into one
 */
export function spread<R extends object>(...objects: (object | undefined)[]): R {
  return objects.reduce((target, object = {}) => {
    return Object.assign(target, object);
  }, ({} as unknown) as R) as R;
}

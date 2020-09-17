import { objectKeys } from './object-keys';

export const filterObject = <O extends Record<string, unknown>, K extends keyof O>(
  object: O,
  predicate: (key: keyof O) => boolean
): Record<K, O[K]> => {
  return (objectKeys(object).filter(predicate) as K[]).reduce((filteredObject, key) => {
    return Object.assign(filteredObject, {
      [key]: object[key],
    });
  }, {} as Record<K, O[K]>);
};

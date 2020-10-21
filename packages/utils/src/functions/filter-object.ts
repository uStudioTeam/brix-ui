import { objectKeys } from './object-keys';

/**
 * Filters the object from unwanted keys
 */
export function filterObject<O extends Record<string, any>, K extends keyof O>(
  object: O,
  predicate: (key: keyof O) => boolean
): O {
  return (objectKeys(object).filter((key) => predicate(key as string)) as K[]).reduce((filteredObject, key) => {
    return Object.assign(filteredObject, {
      [key]: object[key],
    });
  }, {} as O);
}

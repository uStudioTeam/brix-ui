import { objectKeys } from './object-keys';

export const filterObject = <O extends Record<string, any>, K extends keyof O>(
  object: O,
  predicate: (key: string) => boolean
): O => {
  return (objectKeys(object).filter((key) => predicate(key as string)) as K[]).reduce((filteredObject, key) => {
    return Object.assign(filteredObject, {
      [key]: object[key],
    });
  }, {} as O);
};

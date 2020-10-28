type Keys<O> = (keyof O)[];

/**
 * Type-safe Object.keys
 */
export function objectKeys<O>(object: O): Keys<O> {
  return Object.keys(object) as Keys<O>;
}

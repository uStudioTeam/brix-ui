import type { Values } from '../types';

/**
 * Type-safe Object.values
 */
export function objectValues<O>(object: O): Values<O>[] {
  return Object.values(object);
}

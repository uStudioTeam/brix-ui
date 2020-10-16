import { Values } from '@brix-ui/utils/types';

export function objectValues<O>(object: O): Values<O>[] {
  return Object.values(object);
}

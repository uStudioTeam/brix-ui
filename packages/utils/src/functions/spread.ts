import type { Values } from '@brix-ui/utils/types';

export const spread = <
  _O extends Record<string, unknown> | undefined,
  O extends Exclude<_O, undefined>,
  R extends Record<keyof O, Values<O>>
>(
  ...objects: _O[]
): R => {
  return objects.reduce((spreadObject, object) => {
    return Object.assign(spreadObject, object || {});
  }, {} as R);
};

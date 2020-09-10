import type { WeakValidationMap } from 'react';

export const extend = <P = {}, E = {}>(propTypes: P, ...toExtend: E[]): WeakValidationMap<P> & WeakValidationMap<E> => {
  return toExtend.reduce(
    (extendedPropTypes, propTypesToExtend) => {
      return Object.assign(extendedPropTypes, propTypesToExtend as WeakValidationMap<E>);
    },
    { ...propTypes }
  );
};

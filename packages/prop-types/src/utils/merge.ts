import { WeakValidationMap } from 'react';

export const merge = <P extends WeakValidationMap<unknown>>(...propTypes: P[]): P => {
  return propTypes.reduce((merged, toMerge) => {
    return Object.assign(merged, toMerge);
  }, {} as P);
};

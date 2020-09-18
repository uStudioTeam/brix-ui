import { filterObject } from '@ustudio-ui/utils/functions';
import type { FC, WeakValidationMap } from 'react';

import { merge } from './merge';

export const extract = <P = {}, K extends keyof P = keyof P>(
  components: FC<P>[],
  filterKeys?: (key: string) => boolean
): WeakValidationMap<Omit<P, K>> => {
  return merge(...components.map(({ propTypes = {} }) => filterObject(propTypes, filterKeys || (() => true))));
};

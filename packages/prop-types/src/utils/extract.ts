import type { FC, WeakValidationMap } from 'react';

import { merge } from './merge';

export const extract = <P extends Record<string, any> = {}>(components: FC<P>[]): WeakValidationMap<P> => {
  return merge(...components.map(({ propTypes = {} }) => propTypes));
};

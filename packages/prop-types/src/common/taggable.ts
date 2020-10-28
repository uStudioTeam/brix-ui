import type { WeakValidationMap } from 'react';
import PT from 'prop-types';

import type { Taggable } from '@brix-ui/types/component';

export const taggable = <T extends string, P extends Taggable<T>>(tags?: T[]): WeakValidationMap<P> => {
  return ({
    as: PT.oneOfType([tags ? PT.oneOf([...tags]) : PT.string, PT.object, PT.func]),
  } as unknown) as WeakValidationMap<P>;
};

import type { WeakValidationMap } from 'react';
import PT from 'prop-types';

import type { StylableComponent } from '@brix-ui/types/component';

export const stylableComponent = <S extends string>(
  customProperties?: S | S[]
): WeakValidationMap<StylableComponent<S>> => {
  return (Array.isArray(customProperties) ? customProperties : [customProperties ?? '']).reduce(
    (propTypes, key) => {
      return Object.assign(propTypes, {
        [key]: PT.string,
      });
    },
    { className: PT.string } as unknown
  ) as WeakValidationMap<StylableComponent<S>>;
};

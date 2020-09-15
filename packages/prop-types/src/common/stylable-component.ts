import type { WeakValidationMap } from 'react';
import PT from 'prop-types';

import { objectKeys } from '@ustudio-ui/utils/functions';
import type { StylableComponent } from '@ustudio-ui/types/component';

export const stylableComponent = <S extends Record<string, any> = { className?: string }>(
  styledObject: S = {} as S
): WeakValidationMap<StylableComponent<S>> => {
  return objectKeys(styledObject).reduce(
    (propTypes, key) => {
      return Object.assign(propTypes, {
        [key]: PT.func,
      });
    },
    ({ className: PT.string } as unknown) as WeakValidationMap<StylableComponent<S>>
  );
};

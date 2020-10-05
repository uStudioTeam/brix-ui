import type { WeakValidationMap } from 'react';
import PT from 'prop-types';

import type { Affixable } from '@brix-ui/types/component';

export const affixable: WeakValidationMap<Affixable> = {
  prefix: PT.node,
  suffix: PT.node,
};

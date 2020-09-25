import type { WeakValidationMap } from 'react';
import PT from 'prop-types';

import type { Delayable } from '@brix-ui/types/component';

export const delayable: WeakValidationMap<Delayable> = {
  delay: PT.number,
};

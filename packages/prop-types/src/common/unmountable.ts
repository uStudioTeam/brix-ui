import type { WeakValidationMap } from 'react';
import PT from 'prop-types';

import type { Unmountable } from '@brix-ui/types/component';

export const unmountable: WeakValidationMap<Unmountable> = {
  unmountOnExit: PT.bool,
};

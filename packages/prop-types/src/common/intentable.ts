import type { WeakValidationMap } from 'react';
import PT from 'prop-types';

import { Intent, Intentable } from '@brix-ui/types/component';
import { objectValues } from '@brix-ui/utils/functions';

export const intentable: WeakValidationMap<Intentable> = {
  intent: PT.oneOf(objectValues(Intent)),
};

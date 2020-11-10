import type { WeakValidationMap } from 'react';
import PT from 'prop-types';

import type { Gapable } from '@brix-ui/types/component';

import { record } from '../utils';

export const gapable: WeakValidationMap<Gapable> = record(['gap', 'horizontalGap', 'verticalGap'], PT.string);

import PT, { Requireable } from 'prop-types';

import { objectValues } from '@ustudio-ui/utils/functions';
import type { Alignable } from '@ustudio-ui/types/component';
import { Align } from '@ustudio-ui/types/css';

import { record } from '../utils';

export const alignable = (): Record<keyof Alignable, Requireable<Alignable[keyof Alignable]>> => {
  return record(['horizontalAlign', 'verticalAlign', 'align'], PT.oneOf(objectValues(Align)));
};

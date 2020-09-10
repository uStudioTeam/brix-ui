import PT, { Requireable } from 'prop-types';

import { record } from '@ustudio-ui/utils/prop-types';
import { objectValues } from '@ustudio-ui/utils/functions';

import type { Alignable } from '../component';
import { Align } from '../css';

export const alignable = (): Record<keyof Alignable, Requireable<Alignable[keyof Alignable]>> => {
  return record(['horizontalAlign', 'verticalAlign', 'align'], PT.oneOf(objectValues(Align)));
};

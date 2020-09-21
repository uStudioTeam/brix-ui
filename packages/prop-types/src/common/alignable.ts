import PT, { Requireable } from 'prop-types';

import { objectValues } from '@brix-ui/utils/functions';
import type { Alignable } from '@brix-ui/types/component';
import { Align } from '@brix-ui/types/css';

import { record } from '../utils';

export const alignable = (): Record<keyof Alignable, Requireable<Alignable[keyof Alignable]>> => {
  return record(['horizontalAlign', 'verticalAlign', 'align'], PT.oneOf(objectValues(Align)));
};

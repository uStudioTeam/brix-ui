import PT, { Requireable } from 'prop-types';

import { objectValues } from '@brix-ui/utils/functions';
import { Position } from '@brix-ui/types/css';
import { Indent, Axis } from '@brix-ui/types/component';

import { record } from '../utils';

export const indent = (): Requireable<Indent> => {
  return PT.oneOfType([
    PT.exact(record(objectValues(Position), PT.string)),
    PT.exact(record(objectValues(Axis), PT.string)),
    PT.exact(record(['top', 'bottom', 'horizontal'], PT.string)),
    PT.exact(record(['left', 'right', 'vertical'], PT.string)),
    PT.string,
  ]) as Requireable<Indent>;
};

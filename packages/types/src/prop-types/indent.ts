import PT, { Requireable } from 'prop-types';

import { objectValues } from '@ustudio-ui/utils/functions';
import { record } from '@ustudio-ui/utils/prop-types';

import { Position } from '../css';
import { Indent, Axis } from '../component';

export const indent = (): Requireable<Indent> => {
  return PT.oneOfType([
    PT.exact(record(objectValues(Position), PT.string)),
    PT.exact(record(objectValues(Axis), PT.string)),
    PT.exact(record(['top', 'bottom', 'horizontal'], PT.string)),
    PT.exact(record(['left', 'right', 'vertical'], PT.string)),
    PT.string,
  ]) as Requireable<Indent>;
};

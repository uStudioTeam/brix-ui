import { Ref } from 'react';
import PT, { Requireable } from 'prop-types';

export const refProp = <E extends HTMLElement>(): Requireable<Ref<E>> => {
  return PT.func;
};

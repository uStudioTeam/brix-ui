import { Align } from '@brix-ui/types/css';

import type { Values } from '../types';

import { parseAlignment } from './parse-alignment';

/**
 * @package
 */
export function parseAlignItems(alignItems?: Values<typeof Align>): string {
  switch (alignItems) {
    case 'space-between':
    case 'space-around':
    case 'space-evenly': {
      console.warn(`Property 'align-items' does not accept '${alignItems}'. Falling back to 'initial'.`);

      return '';
    }
    default:
      return parseAlignment(alignItems);
  }
}

import { Align } from '@brix-ui/types/css';

import type { Values } from '../types';

/**
 * @package
 */
export function parseAlignment(alignment?: Values<typeof Align>): string {
  switch (alignment) {
    case 'start':
    case 'end': {
      return `flex-${alignment}`;
    }
    default: {
      return alignment ?? '';
    }
  }
}

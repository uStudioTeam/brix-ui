import { Align } from '@ustudio-ui/types/css';

import { Values } from '../types';

export const parseAlignment = (alignment?: Values<typeof Align>): string | undefined => {
  switch (alignment) {
    case 'start':
    case 'end': {
      return `flex-${alignment}`;
    }
    case 'initial': {
      return undefined;
    }
    default: {
      return alignment;
    }
  }
};

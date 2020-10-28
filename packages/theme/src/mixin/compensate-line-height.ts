import type { Values } from '@brix-ui/utils/types';
import { TypeVariant } from '@brix-ui/types/typography';

export function compensateLineHeight(variant: Values<typeof TypeVariant>): number {
  switch (variant) {
    case 'small':
      return 0;
    case 'h3':
      return -1;
    case 'h2':
    case 'h5':
    case 'p':
      return -2;
    case 'h1':
    case 'h4':
    default:
      return -3;
  }
}

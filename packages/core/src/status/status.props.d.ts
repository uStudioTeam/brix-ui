import type { Values } from '@brix-ui/utils/types';
import { Intent } from '@brix-ui/types/component';

export interface StatusProps {
  intent?: Exclude<Values<typeof Intent>, 'base'>;

  isStatic?: boolean;
  hasBorder?: boolean;
}

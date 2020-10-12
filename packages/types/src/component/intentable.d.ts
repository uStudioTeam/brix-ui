import type { Values } from '@brix-ui/utils/types';

import { Intent } from './intent';

export interface Intentable {
  intent?: Values<typeof Intent>;
}

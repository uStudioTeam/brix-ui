import type { Values } from '@brix-ui/utils/types';

import { Granularity } from './granularity';

export interface TimePickerChild {
  name: Values<typeof Granularity>;
}

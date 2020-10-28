import type { Values } from '@brix-ui/utils/types';

import { Granularity, Time } from '../entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TimePickerState extends Record<Values<typeof Granularity>, Time> {}

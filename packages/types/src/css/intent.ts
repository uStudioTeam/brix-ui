import { Values, With } from '@ustudio-ui/utils/types';

export const Intent = {
  Success: 'success',
  Critical: 'critical',
  Accent: 'accent',
} as const;

export type WithIntent<T = undefined> = With<T, { intent: Values<typeof Intent> }>;

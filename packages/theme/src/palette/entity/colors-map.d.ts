import { Color } from '@ustudio-ui/types/palette';
import type { Values } from '@ustudio-ui/utils/types';

export interface ColorsMap extends Record<Values<typeof Color>, string> {}

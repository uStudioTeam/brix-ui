import { Values } from '@ustudio-ui/utils/types';

import { Align } from '../css';

export type Alignable = Partial<Record<'horizontalAlign' | 'verticalAlign' | 'align', Values<typeof Align>>>;

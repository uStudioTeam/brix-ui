import { Values } from '@ustudio-ui/utils/types';

import { Align } from '../css';

export type Alignable = {
  horizontalAlign?: Values<typeof Align>;
  verticalAlign?: Values<typeof Align>;
  align?: Values<typeof Align>;
};

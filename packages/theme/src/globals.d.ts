import 'styled-components';

import type { DeepRequired } from '@ustudio-ui/utils/types';

import type { Theme } from './theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DeepRequired<Theme> {}
}

import 'styled-components';

import type { Theme } from '@ustudio-ui/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module '*.inline.svg' {
  const content: any;

  export default content;
}

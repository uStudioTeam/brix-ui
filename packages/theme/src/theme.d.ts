import type { DeepRequired, With } from '@ustudio-ui/utils/types';

import type { FontsMap } from './typography';
import type { BreakpointsMap } from './breakpoints';

export type Theme = DeepRequired<
  {
    fontBody: string;
    fontArticle: string;
    fontCode: string;
  } & FontsMap &
    BreakpointsMap
>;

export type WithTheme<T = undefined> = With<T, { theme: Theme }>;

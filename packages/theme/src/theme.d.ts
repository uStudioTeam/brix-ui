import type { With } from '@ustudio-ui/utils/types';

import type { FontsMap } from './typography';
import type { BreakpointsMap } from './breakpoints';

export interface Theme extends Required<FontsMap>, BreakpointsMap {
  fontBody: string;
  fontArticle: string;
  fontCode: string;
}

export type WithTheme<T = undefined> = With<T, { theme: Theme }>;

import { With } from '@ustudio-ui/utils/types';

import { FontsMap } from './typography';

export interface Theme extends FontsMap {
  fontBody: string;
  fontArticle: string;
  fontCode: string;
}

export type WithTheme<T = undefined> = With<T, { theme: Theme }>;

import type { ReactNode } from 'react';

import type { Theme, ThemeOverride } from '../entity';

export interface ThemeProviderProps {
  children: ((theme: Theme) => ReactNode) | ReactNode;

  theme?: ThemeOverride;
}

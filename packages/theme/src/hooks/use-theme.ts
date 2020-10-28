import { useTheme as useSCTheme } from 'styled-components';

import type { Theme } from '../entity';

export function useTheme(): Theme {
  return useSCTheme() as Theme;
}

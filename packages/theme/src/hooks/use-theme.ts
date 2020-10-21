import { useTheme as useSCTheme } from 'styled-components';

import type { Theme } from '../entity';

export default function useTheme(): Theme {
  return useSCTheme() as Theme;
}

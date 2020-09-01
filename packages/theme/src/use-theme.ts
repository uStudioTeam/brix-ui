import { useTheme as useSCTheme } from 'styled-components';

import type { Theme } from './entity';

export const useTheme = (): Theme => useSCTheme();

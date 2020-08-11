import { useTheme as useSCTheme } from 'styled-components';

import type { Theme } from './theme';

export const useTheme = (): Theme => useSCTheme();

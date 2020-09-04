import { useCallback, useEffect, useRef, useState } from 'react';

import type { Values } from '@ustudio-ui/utils/types';

import { Theme, ThemeMode, ThemeOverride } from '../entity';

import { useMediaQuery } from './use-media-query';

export const useThemeMode = (theme: ThemeOverride): [Values<typeof ThemeMode> | undefined, Theme['switchMode']] => {
  const [themeMode, setThemeMode] = useState<Values<typeof ThemeMode> | undefined>();

  const switchMode = useCallback<Theme['switchMode']>(
    (mode) => {
      if (mode) {
        setThemeMode(mode);
      } else {
        setThemeMode(themeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
      }
    },
    [themeMode]
  );

  const isModeLight = useMediaQuery('(prefers-color-scheme: light)');

  const { current: localStorageKey } = useRef('ustudio-ui-theme-mode');

  useEffect(() => {
    const storedMode = localStorage.getItem(localStorageKey) as Values<typeof ThemeMode> | null;

    if (theme.mode) {
      switchMode(theme.mode);
    } else if (storedMode) {
      switchMode(storedMode);
    } else {
      switchMode(isModeLight ? ThemeMode.Light : ThemeMode.Dark);
    }
  }, []);

  useEffect(() => {
    if (themeMode !== undefined) {
      localStorage.setItem(localStorageKey, themeMode as string);
    }
  }, [themeMode]);

  return [themeMode, switchMode];
};

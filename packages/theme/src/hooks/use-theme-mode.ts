import { useCallback, useEffect, useRef, useState } from 'react';

import type { Values } from '@brix-ui/utils/types';
import useMediaQuery from '@brix-ui/hooks/use-media-query';

import { Theme, ThemeMode, ThemeOverride } from '../entity';

export function useThemeMode(mode: ThemeOverride['mode']): [Values<typeof ThemeMode> | undefined, Theme['switchMode']] {
  const [themeMode, setThemeMode] = useState<Values<typeof ThemeMode> | undefined>();

  const switchMode = useCallback<Theme['switchMode']>(
    (nextMode) => {
      if (nextMode !== undefined) {
        setThemeMode(nextMode ? ThemeMode.Light : ThemeMode.Dark);
      } else {
        setThemeMode(themeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
      }
    },
    [themeMode]
  );

  const isModeLight = useMediaQuery('(prefers-color-scheme: light)');

  const { current: localStorageKey } = useRef('brix-ui-theme-mode');

  useEffect(() => {
    const storedMode = localStorage.getItem(localStorageKey) as Values<typeof ThemeMode> | null;

    if (mode !== undefined) {
      switchMode(mode === ThemeMode.Light);
    } else if (storedMode) {
      switchMode(storedMode === ThemeMode.Light);
    } else {
      switchMode(isModeLight);
    }
  }, []);

  useEffect(() => {
    if (themeMode !== undefined) {
      localStorage.setItem(localStorageKey, themeMode as string);
    }
  }, [themeMode]);

  return [themeMode, switchMode];
}

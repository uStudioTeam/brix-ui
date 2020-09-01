import type { ColorsMap } from '@ustudio-ui/theme/palette';
import { Color } from '@ustudio-ui/types/palette';
import { Values } from '@ustudio-ui/utils/types';
import { ThemeMode } from '@ustudio-ui/theme/entity';

const primaryColors = {
  [Color.BaseStrongUp]: '#040506',
  [Color.BaseStrong]: '#262A2F',
  [Color.BaseStrongDown]: '#363C44',

  [Color.BaseWeakUp]: '#F9FAFB',
  [Color.BaseWeak]: '#FCFCFD',
  [Color.BaseWeakDown]: '#FFFFFF',

  [Color.FaintStrongUp]: '#ADB6C3',
  [Color.FaintStrong]: '#C7CCD3',
  [Color.FaintStrongDown]: '#D4D9E0',

  [Color.FaintWeakUp]: '#E3E7EC',
  [Color.FaintWeak]: '#ECEFF4',
  [Color.FaintWeakDown]: '#F8FAFB',

  [Color.AccentStrongUp]: '#0569FE',
  [Color.AccentStrong]: '#438BF7',
  [Color.AccentStrongDown]: '#81AEF0',

  [Color.AccentWeakUp]: '#AFCCF8',
  [Color.AccentWeak]: '#CFE0FA',
  [Color.AccentWeakDown]: '#E3EDFC',

  [Color.CriticalStrongUp]: '#FE3305',
  [Color.CriticalStrong]: '#F76443',
  [Color.CriticalStrongDown]: '#F09681',

  [Color.CriticalWeakUp]: '#F8BDAF',
  [Color.CriticalWeak]: '#FAD7CF',
  [Color.CriticalWeakDown]: '#FCE7E3',

  [Color.SuccessStrongUp]: '#91D302',
  [Color.SuccessStrong]: '#9CDF0D',
  [Color.SuccessStrongDown]: '#B7F336',

  [Color.SuccessWeakUp]: '#DBF89E',
  [Color.SuccessWeak]: '#E5F9B8',
  [Color.SuccessWeakDown]: '#F4FCE3',
};

export const defaultPalette: Record<Values<typeof ThemeMode>, ColorsMap> = {
  light: {
    ...primaryColors,

    [Color.BackgroundBase]: primaryColors[Color.BaseWeak],
    [Color.BackgroundFaint]: primaryColors[Color.FaintWeak],

    [Color.TextBase]: primaryColors[Color.BaseStrong],
    [Color.TextFaint]: primaryColors[Color.FaintStrong],
  },
  dark: {
    ...primaryColors,

    [Color.BackgroundBase]: primaryColors[Color.BaseStrong],
    [Color.BackgroundFaint]: primaryColors[Color.BaseStrongDown],

    [Color.TextBase]: primaryColors[Color.BaseWeak],
    [Color.TextFaint]: primaryColors[Color.FaintStrongUp],
  },
};

import { Color } from '@brix-ui/types/palette';
import type { Values } from '@brix-ui/utils/types';

import { ThemeMode } from '../../../entity';

import type { ColorsMap } from './colors-map';

const primaryPalette = {
  light: {
    [Color.BaseStrongUp]: '#0E1820',
    [Color.BaseStrong]: '#131F2B',
    [Color.BaseStrongDown]: '#2D3C49',

    [Color.BaseWeakUp]: '#F5F8FA',
    [Color.BaseWeak]: '#F8FAFB',
    [Color.BaseWeakDown]: '#FFFFFF',

    [Color.FaintStrongUp]: '#495D6E',
    [Color.FaintStrong]: '#687C8D',
    [Color.FaintStrongDown]: '#95A4B1',

    [Color.FaintWeakUp]: '#DAE1E7',
    [Color.FaintWeak]: '#ECF0F3',
    [Color.FaintWeakDown]: '#F2F5F8',

    [Color.AccentStrongUp]: '#1773C4',
    [Color.AccentStrong]: '#1A81DB',
    [Color.AccentStrongDown]: '#409AE8',

    [Color.AccentWeakUp]: '#7FBBF0',
    [Color.AccentWeak]: '#BFDDF7',
    [Color.AccentWeakDown]: '#E4F1FC',

    [Color.SuccessStrongUp]: '#34971C',
    [Color.SuccessStrong]: '#3FB521',
    [Color.SuccessStrongDown]: '#46CB25',

    [Color.SuccessWeakUp]: '#8EE878',
    [Color.SuccessWeak]: '#C0F4B3',
    [Color.SuccessWeakDown]: '#E5FBE0',

    [Color.CriticalStrongUp]: '#C44B17',
    [Color.CriticalStrong]: '#DB541A',
    [Color.CriticalStrongDown]: '#E87240',

    [Color.CriticalWeakUp]: '#F0A17F',
    [Color.CriticalWeak]: '#F7D0BF',
    [Color.CriticalWeakDown]: '#FCEBE4',
  },
  dark: {
    [Color.BaseStrongUp]: '#FCFCFC',
    [Color.BaseStrong]: '#F7F7F7',
    [Color.BaseStrongDown]: '#DCDEE0',

    [Color.BaseWeakUp]: '#23262A',
    [Color.BaseWeak]: '#1C1F21',
    [Color.BaseWeakDown]: '#151719',

    [Color.FaintStrongUp]: '#8C949B',
    [Color.FaintStrong]: '#747B81',
    [Color.FaintStrongDown]: '#5C6166',

    [Color.FaintWeakUp]: '#32383E',
    [Color.FaintWeak]: '#292E32',
    [Color.FaintWeakDown]: '#202427',

    [Color.AccentStrongUp]: '#52A4EA',
    [Color.AccentStrong]: '#2D90E6',
    [Color.AccentStrongDown]: '#1876C9',

    [Color.AccentWeakUp]: '#0E4677',
    [Color.AccentWeak]: '#0C3B64',
    [Color.AccentWeakDown]: '#092B49',

    [Color.SuccessStrongUp]: '#4DB832',
    [Color.SuccessStrong]: '#36A919',
    [Color.SuccessStrongDown]: '#2D8E15',

    [Color.SuccessWeakUp]: '#1E640C',
    [Color.SuccessWeak]: '#18520A',
    [Color.SuccessWeakDown]: '#103607',

    [Color.CriticalStrongUp]: '#EA8053',
    [Color.CriticalStrong]: '#E6652D',
    [Color.CriticalStrongDown]: '#C94D18',

    [Color.CriticalWeakUp]: '#762D0E',
    [Color.CriticalWeak]: '#64260C',
    [Color.CriticalWeakDown]: '#491C09',
  },
};

const textPalette = {
  light: {
    [Color.TextBaseStrong]: primaryPalette.light[Color.BaseStrong],
    [Color.TextBaseWeak]: primaryPalette.light[Color.BaseWeak],
  },
  dark: {
    [Color.TextBaseStrong]: primaryPalette.dark[Color.BaseWeak],
    [Color.TextBaseWeak]: primaryPalette.dark[Color.BaseStrong],
  },
};

export const defaultPalette: Record<Values<typeof ThemeMode>, ColorsMap> = {
  light: {
    ...primaryPalette.light,
    ...textPalette.light,
  },
  dark: {
    ...primaryPalette.dark,
    ...textPalette.dark,
  },
};

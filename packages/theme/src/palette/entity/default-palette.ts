import { Color } from '@ustudio-ui/types/palette';
import type { Values } from '@ustudio-ui/utils/types';

import { ThemeMode } from '../../entity';

import type { ColorsMap } from './colors-map';

const primaryPalette = {
  light: {
    [Color.BaseStrongUp]: '#0E1820',
    [Color.BaseStrong]: '#131F2B',
    [Color.BaseStrongDown]: '#172735',

    [Color.BaseWeakUp]: '#EEF3F7',
    [Color.BaseWeak]: '#F8FAFB',
    [Color.BaseWeakDown]: '#FFFFFF',

    [Color.FaintStrongUp]: '#4E6274',
    [Color.FaintStrong]: '#687C8D',
    [Color.FaintStrongDown]: '#8495A4',

    [Color.FaintWeakUp]: '#C8D2DA',
    [Color.FaintWeak]: '#E0E6EB',
    [Color.FaintWeakDown]: '#EBF0F4',

    [Color.AccentStrongUp]: '#1773C4',
    [Color.AccentStrong]: '#1A81DB',
    [Color.AccentStrongDown]: '#409AE8',

    [Color.AccentWeakUp]: '#7FBBF0',
    [Color.AccentWeak]: '#BFDDF7',
    [Color.AccentWeakDown]: '#DBECFB',

    [Color.SuccessStrongUp]: '#34B215',
    [Color.SuccessStrong]: '#3BC918',
    [Color.SuccessStrongDown]: '#41DB1A',

    [Color.SuccessWeakUp]: '#96F07F',
    [Color.SuccessWeak]: '#C3F6B6',
    [Color.SuccessWeakDown]: '#D9FAD1',

    [Color.CriticalStrongUp]: '#C44B17',
    [Color.CriticalStrong]: '#DB541A',
    [Color.CriticalStrongDown]: '#E87240',

    [Color.CriticalWeakUp]: '#F0A17F',
    [Color.CriticalWeak]: '#F7D0BF',
    [Color.CriticalWeakDown]: '#FBE4DB',
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

    [Color.SuccessStrongUp]: '#57D039',
    [Color.SuccessStrong]: '#3BC918',
    [Color.SuccessStrongDown]: '#33AD15',

    [Color.SuccessWeakUp]: '#23760E',
    [Color.SuccessWeak]: '#1E640C',
    [Color.SuccessWeakDown]: '#164909',

    [Color.CriticalStrongUp]: '#EA8053',
    [Color.CriticalStrong]: '#E6652D',
    [Color.CriticalStrongDown]: '#C94D18',

    [Color.CriticalWeakUp]: '#762D0E',
    [Color.CriticalWeak]: '#64260C',
    [Color.CriticalWeakDown]: '#491C09',
  },
};

const textPalette = {
  [Color.TextBaseStrong]: primaryPalette.light[Color.BaseStrong],
  [Color.TextBaseWeak]: primaryPalette.light[Color.BaseWeak],
};

export const defaultPalette: Record<Values<typeof ThemeMode>, ColorsMap> = {
  light: {
    ...primaryPalette.light,
    ...textPalette,
  },
  dark: {
    ...primaryPalette.dark,
    ...textPalette,
  },
};

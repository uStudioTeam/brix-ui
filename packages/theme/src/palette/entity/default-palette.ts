import { Variable } from '@ustudio-ui/types/css';
import { Color, ColorTuple } from '@ustudio-ui/types/palette';
import { getCssVariable, objectKeys } from '@ustudio-ui/utils/functions';
import type { Keys, Values } from '@ustudio-ui/utils/types';

import { ColorTransformer } from './color-transformer';
import type { ColorsMap } from './colors-map';

type Palette<K = Keys<typeof Color>, V = ColorTuple> = Record<typeof Color[Extract<Keys<typeof Color>, K>], V>;

const rawToHsl = <K>(palette: Palette<K>): Palette<K, string> => {
  // TypeScript goes insane here for some reason
  // @ts-ignore
  return objectKeys(palette).reduce((hslPalette, key) => {
    return Object.assign(hslPalette, {
      [key]: ColorTransformer.tupleToColor(palette[key]),
    });
  }, {} as Palette<K, string>);
};

type AuxillaryKeys =
  | 'BackgroundBase'
  | 'BackgroundBaseInverse'
  | 'BackgroundFaint'
  | 'BackgroundFaintInverse'
  | 'TextBase'
  | 'TextBaseInverse'
  | 'TextFaint'
  | 'TextFaintInverse'
  | 'LineFaint'
  | 'LineFaintInverse';

const auxillaryPaletteRaw: Palette<AuxillaryKeys> = {
  [Color.BackgroundBase]: [240, 20, 99],
  [Color.BackgroundBaseInverse]: [207, 15, 12],
  [Color.BackgroundFaint]: [207, 0, 96],
  [Color.BackgroundFaintInverse]: [207, 2, 17],
  [Color.TextBase]: [207, 15, 12],
  [Color.TextBaseInverse]: [240, 20, 99],
  [Color.TextFaint]: [207, 5, 76],
  [Color.TextFaintInverse]: [207, 0, 71],
  [Color.LineFaint]: [200, 5, 76],
  [Color.LineFaintInverse]: [207, 2, 27],
};

export const auxillaryPalette = rawToHsl<AuxillaryKeys>(auxillaryPaletteRaw);

type PrimaryKeys =
  | 'BaseStrong'
  | 'BaseWeak'
  | 'FaintStrong'
  | 'FaintWeak'
  | 'AccentStrong'
  | 'AccentWeak'
  | 'CriticalStrong'
  | 'CriticalWeak'
  | 'SuccessStrong'
  | 'SuccessWeak';

type PrimaryPalette<T = ColorTuple> = Palette<PrimaryKeys, T>;

const primaryPaletteRaw: PrimaryPalette = {
  [Color.BaseStrong]: [208, 15, 12],
  [Color.BaseWeak]: [208, 5, 99],

  [Color.FaintStrong]: [207, 5, 76],
  [Color.FaintWeak]: [207, 5, 95],

  [Color.AccentStrong]: [208, 79, 48],
  [Color.AccentWeak]: [210, 79, 91],

  [Color.CriticalStrong]: [18, 63, 53],
  [Color.CriticalWeak]: [41, 91, 89],

  [Color.SuccessStrong]: [151, 76, 33],
  [Color.SuccessWeak]: [102, 62, 92],
};

export const primaryPalette = rawToHsl<PrimaryKeys>(primaryPaletteRaw);

const shift: PrimaryPalette<ReturnType<typeof ColorTransformer.applyShift>> = objectKeys(primaryPaletteRaw).reduce(
  (shiftObject, key) => {
    return Object.assign(shiftObject, { [key]: ColorTransformer.applyShift(primaryPaletteRaw[key]) });
  },
  {} as PrimaryPalette<ReturnType<typeof ColorTransformer.applyShift>>
);

type SecondaryKeys = Exclude<Keys<typeof Color>, PrimaryKeys | AuxillaryKeys | FancyKeys>;

// These values show corresponding shift values from the base color
export const secondaryPaletteShifts: Palette<SecondaryKeys> = {
  [Color.BaseStrongUp]: [0, 10, -9],
  [Color.BaseStrongDown]: [0, -10, 13],

  [Color.BaseWeakDown]: [0, 0, 1],

  [Color.FaintStrongDown]: [0, 0, 5],

  [Color.FaintWeakUp]: [0, 0, -2],
  [Color.FaintWeakDown]: [0, 0, 2],

  [Color.AccentStrongUp]: [0, 5, -5],
  [Color.AccentStrongDown]: [0, 1, 8],

  [Color.AccentWeakUp]: [0, -6, -13],
  [Color.AccentWeakDown]: [0, -26, 5],

  [Color.CriticalStrongUp]: [0, 7, -5],
  [Color.CriticalStrongDown]: [0, 0, 8],

  [Color.CriticalWeakUp]: [0, 1, -13],
  [Color.CriticalWeakDown]: [0, -18, 5],

  [Color.SuccessStrongUp]: [0, 10, -6],
  [Color.SuccessStrongDown]: [0, -15, 11],

  [Color.SuccessWeakUp]: [0, 8, -17],
  [Color.SuccessWeakDown]: [0, -18, 4],
};

// Here we create `hsl` colors for `secondary` group
// applying shifts from `secondaryPaletteShifts`
export const secondaryPalette = rawToHsl<SecondaryKeys>(
  objectKeys(secondaryPaletteShifts).reduce((secondaryPaletteShifted, key) => {
    return Object.assign(secondaryPaletteShifted, {
      [key]: shift[key.replace(/(-up|-down)$/, '') as typeof Color[PrimaryKeys]](
        ...(secondaryPaletteShifts[key] as ColorTuple)
      ),
    });
  }, {}) as Palette<SecondaryKeys>
);

const createFancy = (
  baseColor: Values<typeof Color>,
  middleColor: [ColorTuple, ColorTuple],
  topmostColor: [ColorTuple, ColorTuple]
): string => {
  return `linear-gradient(to right, ${ColorTransformer.tupleToColor(
    topmostColor[0],
    0.25
  )}, ${ColorTransformer.tupleToColor(topmostColor[1], 0.25)}),
    linear-gradient(to right, ${ColorTransformer.tupleToColor(middleColor[0], 0.5)}, ${ColorTransformer.tupleToColor(
    middleColor[1],
    0.5
  )}),
  ${getCssVariable(Variable.Color, baseColor)}`;
};

type FancyKeys = 'FancyAccent' | 'FancyCritical' | 'FancySuccess';

export const gradientPalette: Palette<FancyKeys, string> = {
  [Color.FancyAccent]: createFancy(
    Color.AccentStrong,
    [shift[Color.SuccessWeak](0, -5, -8), shift[Color.SuccessStrong](0, 1, 11)],
    [shift[Color.AccentWeak](0, 6, 13), shift[Color.AccentStrong](0, 1, -8)]
  ),
  [Color.FancyCritical]: createFancy(
    Color.BaseWeak,
    [shift[Color.CriticalStrong](0, 0, 8), primaryPaletteRaw[Color.CriticalStrong]],
    [[41, 0, 96], shift[Color.CriticalWeak](0, 1, -13)]
  ),
  [Color.FancySuccess]: createFancy(
    Color.BaseWeak,
    [shift[Color.SuccessWeak](0, -5, -8), primaryPaletteRaw[Color.SuccessStrong]],
    [shift[Color.SuccessStrong](0, 1, 77), shift[Color.SuccessStrong](0, 1, 11)]
  ),
};

export const defaultPalette: ColorsMap = {
  ...primaryPalette,
  ...secondaryPalette,
  ...auxillaryPalette,
  ...gradientPalette,
};

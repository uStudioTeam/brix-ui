import { darken, getLuminance, hsl, hsla, parseToHsl } from 'polished';

import { Color, ColorTuple } from '@ustudio-ui/types/palette';
import type { Theme } from '@ustudio-ui/theme';
import { minMax } from '@ustudio-ui/utils/functions';

export class ColorTransformer {
  public static normalizeColor(theme: Theme, color: string): string {
    // @ts-expect-error
    return hsla({ alpha: 1, ...parseToHsl(theme.palette[color] || color) });
  }

  public static parseColor(theme: Theme, color: string | undefined, fallback?: string): string {
    const normalizedColor = this.normalizeColor(theme, (color || fallback) as string);

    return hsl(parseToHsl(normalizedColor));
  }

  public static applyShift([hue, saturation, lightness]: ColorTuple): (...shift: ColorTuple) => ColorTuple {
    return (...shift) => {
      return [
        [hue, 360],
        [saturation, 100],
        [lightness, 100],
      ].map(([value, max], index) => minMax(0, value + shift[index], max)) as ColorTuple;
    };
  }

  public static flattenAlpha(theme: Theme, color: string): string {
    const normalizedColor = this.normalizeColor(theme, color);

    // `alpha` can be undefined
    // @ts-ignore
    const { alpha: amount = 0 } = parseToHsl(this.parseColor(theme, normalizedColor));

    return darken(amount, normalizedColor);
  }

  public static getContrastingColor(theme: Theme, color: string): string {
    const normalizedColor = this.normalizeColor(theme, color);

    return this.isBrightColor(theme, normalizedColor) ? theme.palette[Color.BaseStrong] : theme.palette[Color.BaseWeak];
  }

  public static isBrightColor(theme: Theme, color: string): boolean {
    const normalizedColor = this.normalizeColor(theme, color);

    return getLuminance(this.flattenAlpha(theme, normalizedColor)) > 0.46;
  }
}

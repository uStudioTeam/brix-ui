import { darken, getLuminance, hsla, parseToHsl, readableColor } from 'polished';

import { Color, ColorTuple } from '@ustudio-ui/types/palette';
import type { Theme } from '@ustudio-ui/theme';

export class ColorTransformer {
  public static parseColor(color: string, theme: Theme): string {
    // `color` can be missing from palette
    // @ts-ignore
    return this.stringToColor(theme.palette[color] || color);
  }

  public static applyShift(colorTuple: ColorTuple): (...shift: ColorTuple) => ColorTuple {
    return (...shift) => {
      return colorTuple.map((colorValue, index) => {
        return colorValue + shift[index];
      }) as ColorTuple;
    };
  }

  public static getContrastingColor(color: string, theme: Theme): string {
    return readableColor(
      this.flattenAlpha(color, theme),
      theme.palette[Color.BaseStrong],
      theme.palette[Color.BaseWeak]
    );
  }

  public static isBrightColor(color: string, theme: Theme): boolean {
    return getLuminance(this.flattenAlpha(color, theme)) > 0.45;
  }

  public static toTuple(color: string): ColorTuple {
    const { hue, saturation, lightness } = parseToHsl(color);

    return [hue, saturation, lightness];
  }

  public static tupleToColor([hue, saturation, lightness]: ColorTuple, alpha = 1): string {
    return hsla(hue, saturation / 100, lightness / 100, alpha);
  }

  public static stringToColor(color: string): string {
    return hsla({ alpha: 1, ...parseToHsl(color) });
  }

  public static flattenAlpha(color: string, theme: Theme): string {
    // `alpha` can be undefined
    // @ts-ignore
    const { alpha: amount = 0 } = parseToHsl(this.parseColor(color, theme));

    return darken(amount, color);
  }
}

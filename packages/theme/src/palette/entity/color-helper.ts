import { darken, getLuminance, hsla, parseToHsl } from 'polished';

import { Color } from '@ustudio-ui/types/palette';
import type { Theme } from '@ustudio-ui/theme';

export class ColorHelper {
  public constructor(private readonly palette: Theme['palette']) {}

  public parseColor(color: string): string {
    // `color` can be missing from palette
    // @ts-expect-error
    return hsla({ alpha: 1, ...parseToHsl(this.palette[color] || color) });
  }

  public getContrastingColor(color: string): string {
    return this.isBrightColor(color) ? this.palette[Color.BaseStrong] : this.palette[Color.BaseWeak];
  }

  public isBrightColor(color: string): boolean {
    return getLuminance(this.flattenAlpha(color)) > 0.46;
  }

  public flattenAlpha(color: string): string {
    const parsedColor = this.parseColor(color);

    // `alpha` can be undefined
    // @ts-expect-error
    const { alpha: amount = 0 } = parseToHsl(parsedColor);

    return darken(amount, parsedColor);
  }
}

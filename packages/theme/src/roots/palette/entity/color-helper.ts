import { darken, getLuminance, parseToHsl } from 'polished';

import { Color } from '@brix-ui/types/palette';

import type { Theme } from '../../../entity';
import type { MiscellaneousProps } from '../../miscellaneous';

export class ColorHelper {
  public constructor(private readonly palette: Theme['palette'], private readonly miscellaneous: MiscellaneousProps) {}

  public parseColor(color = ''): string {
    const fromTheme =
      // @ts-expect-error
      this.palette[color] || this.miscellaneous[color.replace(/-([a-z])/g, ([, match]) => match.toUpperCase())];

    return fromTheme || color;
  }

  public getContrastingColor(color: string): string {
    return this.isBrightColor(color) ? this.palette[Color.TextBaseStrong] : this.palette[Color.TextBaseWeak];
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

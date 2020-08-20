import converter from 'color-convert';
import { ColorSpace } from '@ustudio-ui/types/palette';

import { ColorTransformer } from './color-transformer';

export class ColorConverter {
  public static rgbToHsl(rgb: string): string {
    const [red, green, blue, alpha] = ColorTransformer.toTuple(rgb, ColorSpace.RGB, (value) => value / 255);

    return alpha
      ? ColorTransformer.toHsla([red, green, blue], alpha)
      : ColorTransformer.toHsl(converter.rgb.hsl([red, green, blue]));
  }

  public static rgbToHex(rgb: string): string {
    ColorTransformer.validate(rgb, ColorSpace.RGB);

    const [red, green, blue] = ColorTransformer.toTuple(rgb, ColorSpace.RGB, (value) => value.toString(16));

    return `#${red}${green}${blue}`;
  }

  public static hslToRgb(hsl: string): string {
    const colorSpace = ColorTransformer.getSpace(hsl);

    const [hue, saturation, lightness, alpha] = ColorTransformer.toTuple(hsl, colorSpace);

    const rgbTuple = converter.hsl.rgb([hue, saturation, lightness]);

    return alpha ? ColorTransformer.toRgba(rgbTuple, alpha) : ColorTransformer.toRgb(rgbTuple);
  }

  public static hslToHex(hsl: string): string {
    return this.rgbToHex(this.hslToRgb(hsl));
  }

  public static hexToRgb(hex: string): string {
    ColorTransformer.validate(hex, ColorSpace.HEX);

    return ColorTransformer.toRgb(converter.hex.rgb(hex));
  }

  public static hexToHsl(hex: string): string {
    return this.rgbToHsl(this.hexToRgb(hex));
  }
}

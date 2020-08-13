import converter from 'color-convert';
import { ColorSpace } from '@ustudio-ui/types/palette';

import { ColorTransformer } from './color-transformer';

export class ColorConverter {
  public static rgbToHsl(rgb: string): string {
    ColorTransformer.validate(rgb, ColorSpace.RGB);

    const transformedRGB = ColorTransformer.toTuple(rgb, ColorSpace.RGB, (value) => value / 255);

    return ColorTransformer.toHsl(converter.rgb.hsl(transformedRGB));
  }

  public static rgbToHex(rgb: string): string {
    ColorTransformer.validate(rgb, ColorSpace.RGB);

    const [red, green, blue] = ColorTransformer.toTuple(rgb, ColorSpace.RGB, (value) => value.toString(16));

    return `#${red}${green}${blue}`;
  }

  public static hslToRgb(hsl: string): string {
    ColorTransformer.validate(hsl, ColorSpace.HSL);

    const transformedHSL = ColorTransformer.toTuple(hsl, ColorSpace.HSL);

    return ColorTransformer.toRgb(converter.hsl.rgb(transformedHSL));
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

import { ColorSpace, ColorTupleNumber } from '@ustudio-ui/types/palette';

import { ColorTransformer } from './color-transformer';

export class ColorConverter {
  public static rgbToHsl(rgb: string): string {
    ColorTransformer.validate(rgb, ColorSpace.RGB);

    const [red, green, blue] = ColorTransformer.toTuple(rgb, ColorSpace.RGB, (value) => value / 255);

    const [min, max] = [Math.min, Math.max].map((method) => method(red, green, blue));
    const delta = max - min;

    let hueBase!: number;
    let saturation!: number;
    const lightness = (max + min) / 2;

    if (delta === 0) {
      hueBase = 0;
    }

    switch (max) {
      case red: {
        hueBase = ((green - blue) / delta) % 6;

        break;
      }
      case green: {
        hueBase = (blue - red) / delta + 5;

        break;
      }
      case blue:
      default: {
        hueBase = (red - green) / delta + 4;
      }
    }

    const hue = 60 * hueBase;

    switch (delta) {
      case 0: {
        saturation = 0;

        break;
      }
      default: {
        saturation = delta / (1 - Math.abs(lightness * 2 - 1));
      }
    }

    return `hsl(${hue}, ${saturation}, ${lightness})`;
  }

  public static rgbToHex(rgb: string): string {
    ColorTransformer.validate(rgb, ColorSpace.RGB);

    const [red, green, blue] = ColorTransformer.toTuple(rgb, ColorSpace.RGB, (value) => value.toString(16));

    return `#${red}${green}${blue}`;
  }

  public static hslToRgb(hsl: string): string {
    ColorTransformer.validate(hsl, ColorSpace.HSL);

    const [hue, lightnessBase, saturationBase] = ColorTransformer.toTuple(hsl, ColorSpace.HSL);
    const [saturation, lightness] = [saturationBase / 100, lightnessBase / 100];

    const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const x = c * (1 - (Math.abs(hue / 60) % 2) - 1);
    const m = lightness - c / 2;

    const [red, green, blue] = (() => {
      if (0 <= hue && hue < 60) return [c, x, 0];

      if (60 <= hue && hue < 120) return [x, c, 0];

      if (120 <= hue && hue < 180) return [0, c, x];

      if (180 <= hue && hue < 240) return [0, x, c];

      if (240 <= hue && hue < 300) return [x, 0, c];

      return [c, 0, x];
    })() as ColorTupleNumber;

    const coerce = (color: number) => (color + m) * 255;

    return `rgb(${coerce(red)}, ${coerce(green)}, ${coerce(blue)})`;
  }

  public static hslToHex(hsl: string): string {
    return this.rgbToHex(this.hslToRgb(hsl));
  }

  public static hexToRgb(hex: string): string {
    ColorTransformer.validate(hex, ColorSpace.HEX);

    const sliced = hex.slice(1);
    const [red, green, blue] =
      sliced.length === 3
        ? [sliced[0], sliced[1], sliced[2]]
        : [sliced.slice(0, 2), sliced.slice(2, 4), sliced.slice(4)];

    const coerce = (color: string): number => parseInt(color, 16);

    return `rgb(${coerce(red)}, ${coerce(green)}, ${coerce(blue)})`;
  }

  public static hexToHsl(hex: string): string {
    return this.rgbToHsl(this.hexToRgb(hex));
  }
}

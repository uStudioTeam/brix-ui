import { Color, ColorSpace, ColorTupleNumber } from '@ustudio-ui/types/palette';
import { ColorTupleString } from '@ustudio-ui/types/palette/color-tuple';
import type { Values } from '@ustudio-ui/utils/types';
import { ColorConverter, defaultPalette } from '@ustudio-ui/theme/palette';
import type { Theme } from '@ustudio-ui/theme';

type WithAplhaNumber = [number, number, number, number];

type WithAplhaString = [string, string, string, number];

type ApplicableColorSpace = Exclude<Values<typeof ColorSpace>, 'hsla' | 'rgba' | 'hexa'>;

export class ColorTransformer {
  private static readonly regExp: Record<ApplicableColorSpace, RegExp> = {
    [ColorSpace.RGB]: /^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/,
    [ColorSpace.HSL]: /^hsl\((\d{1,3}),\s?(\d{1,3})%,\s?(\d{1,3})%\)$/,
    [ColorSpace.HEX]: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  };

  public static applyShift(colorTuple: ColorTupleNumber): (...shift: ColorTupleNumber) => ColorTupleNumber {
    return (...shift) => {
      return colorTuple.map((colorValue, index) => {
        return colorValue + shift[index];
      }) as ColorTupleNumber;
    };
  }

  public static getContrastingColor(color: string, theme?: Theme): string {
    const palette = theme?.palette || defaultPalette;

    return this.getBrightness(color) < 140 ? palette[Color.BaseWeak] : palette[Color.BaseStrong];
  }

  public static getBrightness(color: string): number {
    const getRGB = () => {
      switch (this.getSpace(color)) {
        case 'hsl':
          return ColorConverter.hslToRgb(color);
        case 'hex':
          return ColorConverter.hexToRgb(color);
        default:
          return color;
      }
    };

    const [red, green, blue] = this.toTuple(getRGB(), 'rgb');

    return Number(Math.sqrt(red ** 2 * 0.241 + green ** 2 * 0.691 + blue ** 2 * 0.068).toFixed(0));
  }

  public static validate(value: string, colorSpace: ApplicableColorSpace): void {
    const applyValidation = (pattern: string) => {
      if (!this.regExp[colorSpace].test(value)) {
        throw new TypeError(
          `Invalid ${colorSpace.toUpperCase()} value provided. Must satisfy the pattern \`${pattern}\`.`
        );
      }
    };

    switch (colorSpace) {
      case ColorSpace.HSL: {
        return applyValidation('hsl(0-255, 0-100%, 0-100%)');
      }
      case ColorSpace.RGB: {
        return applyValidation('rgb(0-255, 0-255, 0-255)');
      }
    }
  }

  public static getSpace(color: string) {
    const foundSpace = Object.entries(this.regExp).find(([, expression]) => expression.test(color));

    if (!foundSpace) {
      throw new TypeError(`Invalid color ${color} provided.`);
    }

    return foundSpace[0] as ApplicableColorSpace;
  }

  public static toTuple<V = number>(
    value: string,
    colorSpace: ApplicableColorSpace,
    modifier?: (value: number) => V
  ): [V, V, V] {
    const transformedValue = this.getSpace(value) === ColorSpace.HEX ? ColorConverter.hexToHsl(value) : value;
    const transformedSpace = this.getSpace(value) === ColorSpace.HEX ? ColorSpace.HSL : colorSpace;

    const [, ...tuple] = (transformedValue.match(this.regExp[transformedSpace]) as ColorTupleString).map((value) => {
      const asNumber = Number(value);

      return modifier ? modifier(asNumber) : asNumber;
    });

    return tuple as [V, V, V];
  }

  private static fromTuple(
    ...colorTuple: ColorTupleNumber | ColorTupleString | WithAplhaNumber | WithAplhaString
  ): string {
    return colorTuple.join(', ');
  }

  private static toColorFunction(
    colorSpace: Values<typeof ColorSpace>,
    ...colorTuple: ColorTupleNumber | ColorTupleString | WithAplhaNumber | WithAplhaString
  ): string {
    return `${colorSpace}(${this.fromTuple(...colorTuple)})`;
  }

  public static toHsl(colorTuple: ColorTupleNumber): string {
    return this.toColorFunction(
      ColorSpace.HSL,
      ...([`${colorTuple[0]}`, ...colorTuple.slice(1).map((value) => `${value}%`)] as ColorTupleString)
    );
  }

  public static toHsla(colorTuple: ColorTupleNumber, aplha: number): string {
    return this.toColorFunction(
      ColorSpace.HSLA,
      ...([`${colorTuple[0]}`, ...colorTuple.slice(1).map((value) => `${value}%`), aplha] as WithAplhaString)
    );
  }

  public static toRgb(colorTuple: ColorTupleNumber): string {
    return this.toColorFunction(ColorSpace.RGB, ...colorTuple);
  }

  public static toRgba(colorTuple: ColorTupleNumber, aplha: number): string {
    return this.toColorFunction(ColorSpace.RGBA, ...[...colorTuple, aplha]);
  }
}

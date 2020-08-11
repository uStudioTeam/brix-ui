import { ColorSpace, ColorTuple } from '@ustudio-ui/types/palette';
import type { Values } from '@ustudio-ui/utils/types';

type WithAplha = [number, number, number, number];

type ApplicableColorSpace = Exclude<Values<typeof ColorSpace>, 'hsla' | 'rgba' | 'hexa'>;

export class ColorTransformer {
  private static readonly regExp: Record<ApplicableColorSpace, RegExp> = {
    [ColorSpace.RGB]: /^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/,
    [ColorSpace.HSL]: /^hsl\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/,
    [ColorSpace.HEX]: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  };

  public static applyShift(colorTuple: ColorTuple): (...shift: ColorTuple) => ColorTuple {
    return (...shift) => {
      return colorTuple.map((colorValue, index) => {
        return colorValue + shift[index];
      }) as ColorTuple;
    };
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
        return applyValidation('hsl(0-255, 0-100, 0-100)');
      }
      case ColorSpace.RGB: {
        return applyValidation('rgb(0-255, 0-255, 0-255)');
      }
    }
  }

  public static toTuple<V = number>(
    value: string,
    colorSpace: ApplicableColorSpace,
    modifier?: (value: number) => V
  ): [V, V, V] {
    const [, ...tuple] = (value.match(this.regExp[colorSpace]) as [string, string, string]).map((value) => {
      const asNumber = Number(value);

      return modifier ? modifier(asNumber) : asNumber;
    });

    return tuple as [V, V, V];
  }

  private static fromTuple(...colorTuple: ColorTuple | WithAplha): string {
    return colorTuple.join(', ');
  }

  private static toColorFunction(colorSpace: Values<typeof ColorSpace>, ...colorTuple: ColorTuple | WithAplha): string {
    return `${colorSpace}(${this.fromTuple(...colorTuple)})`;
  }

  public static toHsl(colorTuple: ColorTuple): string {
    return this.toColorFunction(ColorSpace.HSL, ...colorTuple);
  }

  public static toHsla(colorTuple: ColorTuple, aplha: number): string {
    return this.toColorFunction(ColorSpace.HSLA, ...[...colorTuple, aplha]);
  }

  public static toRgb(colorTuple: ColorTuple): string {
    return this.toColorFunction(ColorSpace.RGB, ...colorTuple);
  }

  public static toRgba(colorTuple: ColorTuple, aplha: number): string {
    return this.toColorFunction(ColorSpace.RGBA, ...[...colorTuple, aplha]);
  }
}

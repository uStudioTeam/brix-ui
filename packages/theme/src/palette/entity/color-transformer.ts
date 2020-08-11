import { ColorSpace, ColorTupleNumber } from '@ustudio-ui/types/palette';
import { ColorTupleString } from '@ustudio-ui/types/palette/color-tuple';
import type { Values } from '@ustudio-ui/utils/types';

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

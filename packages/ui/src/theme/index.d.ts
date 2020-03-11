import { ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Breakpoint, Theme } from './theme';

export const ThemeProvider: {
  (props: { override?: Theme; children: ReactNode }): JSX.Element;
};

export const Mixin: {
  Device: {
    mobile(style: FlattenSimpleInterpolation): FlattenSimpleInterpolation;
    desktop(style: FlattenSimpleInterpolation): FlattenSimpleInterpolation;
  };
  Font: {
    codeRegular(): FlattenSimpleInterpolation;
    bodySmall(): FlattenSimpleInterpolation;
    bodyRegular(): FlattenSimpleInterpolation;
    bodyItalic(): FlattenSimpleInterpolation;
    bodyUnderlined(): FlattenSimpleInterpolation;
    bodyBold(): FlattenSimpleInterpolation;
    caption(): FlattenSimpleInterpolation;
    h1(): FlattenSimpleInterpolation;
    h2(): FlattenSimpleInterpolation;
    h3(): FlattenSimpleInterpolation;
    h4(): FlattenSimpleInterpolation;
    h5(): FlattenSimpleInterpolation;
    h6(): FlattenSimpleInterpolation;
    articleRegular(): FlattenSimpleInterpolation;
    articleBold(): FlattenSimpleInterpolation;
    articleUnderlined(): FlattenSimpleInterpolation;
  };
  Style: {
    borderWithBottom({ colorAll, colorBottom }: { colorAll: string; colorBottom: string }): FlattenSimpleInterpolation;
    borderAll({ color }: { color: string }): FlattenSimpleInterpolation;
    linkUnderline(): FlattenSimpleInterpolation;
    inputPadding(): FlattenSimpleInterpolation;
  };
  Screen: Record<Breakpoint, (style: FlattenSimpleInterpolation) => FlattenSimpleInterpolation>;
};

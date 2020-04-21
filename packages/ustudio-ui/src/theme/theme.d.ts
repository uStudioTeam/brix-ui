export type Color = Shadow | 'primary-light' | 'positive-light' | 'negative-light' | 'lightest' | 'white' | 'black';
export type Shadow = Gradient | 'darkest' | 'dark' | 'neutral' | 'light';
export type Gradient = 'primary' | 'positive' | 'negative';

export type Intent = 'primary' | 'positive' | 'negative';

export type Direction = 'row' | 'column';

export type Breakpoint = 'xs' | 'md' | 'lg' | 'xl';

export type Position = 'left' | 'right' | 'top' | 'bottom';

type Align = 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';

type Indent = 'small' | 'medium' | 'regular' | 'large';

export interface Indentation {
  [position: Position]: Indent;
}

export interface Alignment {
  vertical?: Align;
  horizontal?: Align;
}

export interface ClassNames<S extends Record<string, any>> {
  classNames?: Partial<Record<keyof S, string>>;
  className?: string;
}

export interface Theme {
  breakpoint?: Partial<Record<Breakpoint, number>>;
  indent?: Partial<Record<Indent, string>>;
  palette?: Partial<Record<Color, string>>;
  font?: Partial<Record<'body' | 'code' | 'article', string>>;
  layer?: Partial<Record<'topmost' | 'top' | 'middle' | 'bottom', number>>;
  transition?: string;
  borderRadius?: string;
}

declare module "styled-components" {
  interface DefaultTheme extends Required<Theme> {}
}

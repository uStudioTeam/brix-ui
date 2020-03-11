import { Mixin } from '../theme/mixin';

export function getTextVariant({ variant = 'body' }) {
  return {
    span: Mixin.Font.bodyRegular(),
    small: Mixin.Font.bodySmall(),
    code: Mixin.Font.codeRegular(),
    body: Mixin.Font.bodyRegular(),
    article: Mixin.Font.articleRegular(),
    caption: Mixin.Font.caption(),
    h6: Mixin.Font.h6(),
    h5: Mixin.Font.h5(),
    h4: Mixin.Font.h4(),
    h3: Mixin.Font.h3(),
    h2: Mixin.Font.h2(),
    h1: Mixin.Font.h1(),
  }[variant];
}

export function getTextAppearance({ appearance = 'regular' }) {
  return {
    regular: 'text-decoration: none;',
    bold: 'font-weight: 700;',
    italic: 'font-style: italic;',
    underlined: 'text-decoration: underline;',
  }[appearance];
}

import { css } from 'styled-components';

import { objectKeys } from '@ustudio-ui/utils/functions';
import { FontWeight } from '@ustudio-ui/types/typography';

import { FontsCssMap } from './entity';

const pxToRem = (value: number): number => value / 16;

const percentToEm = (value: number): number => value / 100;

const applyFontFamily = (fontVariants: FontsCssMap): FontsCssMap => {
  return objectKeys(fontVariants).reduce((variants, font) => {
    return Object.assign(variants, {
      [font]: objectKeys(fontVariants[font]).reduce((types, type) => {
        return Object.assign(types, {
          [type]: css`
            font-family: ${`var(--f-${font})`};
            ${fontVariants[font][type]};
          `,
        });
      }, {}),
    });
  }, {}) as FontsCssMap;
};

export const font: FontsCssMap = applyFontFamily({
  body: {
    h1: css`
      font-weight: ${FontWeight.Black};
      font-size: ${pxToRem(30)}rem;
      letter-spacing: ${percentToEm(-2)}em;
    `,
    h2: css`
      font-weight: ${FontWeight.Bold};
      font-size: ${pxToRem(22)}rem;
      letter-spacing: ${percentToEm(-1)}em;
    `,
    h3: css`
      font-weight: ${FontWeight.Bold};
      font-size: ${pxToRem(18)}rem;
    `,
    h4: css`
      font-weight: ${FontWeight.Light};
      font-size: ${pxToRem(16)}rem;
      font-variant: small-caps oldstyle-nums;
    `,
    h5: css`
      font-weight: ${FontWeight.SemiBold};
      font-size: ${pxToRem(12)}rem;
      font-variant: small-caps oldstyle-nums;
      letter-spacing: ${percentToEm(2)}em;
    `,
    p: css`
      font-weight: ${FontWeight.Regular};
      font-size: ${pxToRem(16)}rem;
    `,
    small: css`
      font-weight: ${FontWeight.Regular};
      font-size: ${pxToRem(12)}rem;
      letter-spacing: ${percentToEm(2)}em;
    `,
  },
  article: {
    h1: css`
      font-weight: ${FontWeight.Black};
      font-size: ${pxToRem(30)}rem;
      letter-spacing: ${percentToEm(-2)}em;
    `,
    h2: css`
      font-weight: ${FontWeight.Black};
      font-size: ${pxToRem(22)}rem;
      letter-spacing: ${percentToEm(-1)}em;
    `,
    h3: css`
      font-weight: ${FontWeight.Black};
      font-size: ${pxToRem(18)}rem;
    `,
    h4: css`
      font-weight: ${FontWeight.Light};
      font-size: ${pxToRem(12)}rem;
      font-variant: small-caps;
      letter-spacing: ${percentToEm(4)}em;
    `,
    h5: css`
      font-weight: ${FontWeight.Black};
      font-size: ${pxToRem(10)}rem;
      font-variant: small-caps oldstyle-nums;
      letter-spacing: ${percentToEm(4)}em;
    `,
    p: css`
      font-weight: ${FontWeight.Regular};
      font-size: ${pxToRem(13)}rem;
    `,
    small: css`
      font-weight: ${FontWeight.Regular};
      font-size: ${pxToRem(10)}rem;
      letter-spacing: ${percentToEm(2)}em;
    `,
  },
  code: {
    h1: css`
      font-weight: ${FontWeight.ExtraBold};
      font-size: ${pxToRem(30)}rem;

      letter-spacing: ${percentToEm(-1)}em;
    `,
    h2: css`
      font-weight: ${FontWeight.ExtraBold};
      font-size: ${pxToRem(22)}rem;
      letter-spacing: ${percentToEm(-2)}em;
    `,
    h3: css`
      font-weight: ${FontWeight.ExtraBold};
      font-size: ${pxToRem(18)}rem;
    `,
    h4: css`
      font-weight: ${FontWeight.Light};
      font-size: ${pxToRem(16)}rem;
    `,
    h5: css`
      font-weight: ${FontWeight.ExtraBold};
      font-size: ${pxToRem(12)}rem;
      letter-spacing: ${percentToEm(4)}em;
    `,
    p: css`
      font-weight: ${FontWeight.Regular};
      font-size: ${pxToRem(14)}rem;
    `,
    small: css`
      font-weight: ${FontWeight.Regular};
      font-size: ${pxToRem(12)}rem;
      letter-spacing: ${percentToEm(2)}em;
    `,
  },
});

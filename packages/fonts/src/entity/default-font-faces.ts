import { FontWeight } from '@brix-ui/types/typography';

import SSPBlack from '../assets/SourceSansPro/SourceSansPro-Black.ttf';
import SSPBold from '../assets/SourceSansPro/SourceSansPro-Bold.ttf';
import SSPSemiBold from '../assets/SourceSansPro/SourceSansPro-SemiBold.ttf';
import SSPRegular from '../assets/SourceSansPro/SourceSansPro-Regular.ttf';
import SSPLight from '../assets/SourceSansPro/SourceSansPro-Light.ttf';

import MBlack from '../assets/Merriweather/Merriweather-Black.ttf';
import MRegular from '../assets/Merriweather/Merriweather-Regular.ttf';
import MLight from '../assets/Merriweather/Merriweather-Light.ttf';

import IExtraBold from '../assets/Inconsolata/Inconsolata-ExtraBold.ttf';
import IRegular from '../assets/Inconsolata/Inconsolata-Regular.ttf';
import ILight from '../assets/Inconsolata/Inconsolata-Light.ttf';

import type { FontsProps } from '../fonts/fonts.props';

const formatSrc = (url: string): string => {
  return `url(${url}) format('truetype')`;
};

const body = {
  black: formatSrc(SSPBlack),
  bold: formatSrc(SSPBold),
  semiBold: formatSrc(SSPSemiBold),
  regular: formatSrc(SSPRegular),
  light: formatSrc(SSPLight),
};

const article = {
  black: formatSrc(MBlack),
  regular: formatSrc(MRegular),
  light: formatSrc(MLight),
};

const code = {
  extraBold: formatSrc(IExtraBold),
  regular: formatSrc(IRegular),
  light: formatSrc(ILight),
};

export const defaultFontFaces: FontsProps = {
  body: {
    name: `'Source Sans Pro', Sans`,
    h1: {
      src: body.black,
      weight: FontWeight.Black,
    },
    h2: {
      src: body.bold,
      weight: FontWeight.Bold,
    },
    h3: {
      src: body.bold,
      weight: FontWeight.Bold,
    },
    h4: {
      src: body.light,
      weight: FontWeight.Light,
    },
    h5: {
      src: body.semiBold,
      weight: FontWeight.SemiBold,
    },
    p: {
      src: body.regular,
      weight: FontWeight.Regular,
    },
    small: {
      src: body.light,
      weight: FontWeight.Light,
    },
  },

  article: {
    name: `'Merriweather', Serif`,
    h1: {
      src: article.black,
      weight: FontWeight.Black,
    },
    h2: {
      src: article.black,
      weight: FontWeight.Black,
    },
    h3: {
      src: article.black,
      weight: FontWeight.Black,
    },
    h4: {
      src: article.light,
      weight: FontWeight.Light,
    },
    h5: {
      src: article.black,
      weight: FontWeight.Black,
    },
    p: {
      src: article.regular,
      weight: FontWeight.Regular,
    },
    small: {
      src: article.regular,
      weight: FontWeight.Regular,
    },
  },

  code: {
    name: `'Inconsolata', Monotype`,
    h1: {
      src: code.extraBold,
      weight: FontWeight.ExtraBold,
    },
    h2: {
      src: code.extraBold,
      weight: FontWeight.ExtraBold,
    },
    h3: {
      src: code.extraBold,
      weight: FontWeight.ExtraBold,
    },
    h4: {
      src: code.light,
      weight: FontWeight.Light,
    },
    h5: {
      src: code.extraBold,
      weight: FontWeight.ExtraBold,
    },
    p: {
      src: code.regular,
      weight: FontWeight.Regular,
    },
    small: {
      src: code.regular,
      weight: FontWeight.Regular,
    },
  },
};

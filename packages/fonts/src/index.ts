import { FontWeight } from '@brix-ui/types/typography';

import SSPBlack from './SourceSansPro/SourceSansPro-Black.ttf';
import SSPBold from './SourceSansPro/SourceSansPro-Bold.ttf';
import SSPSemiBold from './SourceSansPro/SourceSansPro-SemiBold.ttf';
import SSPRegular from './SourceSansPro/SourceSansPro-Regular.ttf';
import SSPLight from './SourceSansPro/SourceSansPro-Light.ttf';

import MBlack from './Merriweather/Merriweather-Black.ttf';
import MRegular from './Merriweather/Merriweather-Regular.ttf';
import MLight from './Merriweather/Merriweather-Light.ttf';

import IExtraBold from './Inconsolata/Inconsolata-ExtraBold.ttf';
import IRegular from './Inconsolata/Inconsolata-Regular.ttf';
import ILight from './Inconsolata/Inconsolata-Light.ttf';

const body = { black: SSPBlack, bold: SSPBold, semiBold: SSPSemiBold, regular: SSPRegular, light: SSPLight };

const article = {
  black: MBlack,
  regular: MRegular,
  light: MLight,
};

const code = {
  extraBold: IExtraBold,
  regular: IRegular,
  light: ILight,
};

const fonts = {
  fontBody: 'Source Sans Pro',
  body: {
    h1: {
      url: body.black,
      weight: FontWeight.Black,
    },
    h2: {
      url: body.bold,
      weight: FontWeight.Bold,
    },
    h3: {
      url: body.bold,
      weight: FontWeight.Bold,
    },
    h4: {
      url: body.light,
      weight: FontWeight.Light,
    },
    h5: {
      url: body.semiBold,
      weight: FontWeight.SemiBold,
    },
    p: {
      url: body.regular,
      weight: FontWeight.Regular,
    },
    small: {
      url: body.light,
      weight: FontWeight.Light,
    },
  },

  fontArticle: 'Merriweather',
  article: {
    h1: {
      url: article.black,
      weight: FontWeight.Black,
    },
    h2: {
      url: article.black,
      weight: FontWeight.Black,
    },
    h3: {
      url: article.black,
      weight: FontWeight.Black,
    },
    h4: {
      url: article.light,
      weight: FontWeight.Light,
    },
    h5: {
      url: article.black,
      weight: FontWeight.Black,
    },
    p: {
      url: article.regular,
      weight: FontWeight.Regular,
    },
    small: {
      url: article.regular,
      weight: FontWeight.Regular,
    },
  },

  fontCode: 'Inconsolata',
  code: {
    h1: {
      url: code.extraBold,
      weight: FontWeight.ExtraBold,
    },
    h2: {
      url: code.extraBold,
      weight: FontWeight.ExtraBold,
    },
    h3: {
      url: code.extraBold,
      weight: FontWeight.ExtraBold,
    },
    h4: {
      url: code.light,
      weight: FontWeight.Light,
    },
    h5: {
      url: code.extraBold,
      weight: FontWeight.ExtraBold,
    },
    p: {
      url: code.regular,
      weight: FontWeight.Regular,
    },
    small: {
      url: code.regular,
      weight: FontWeight.Regular,
    },
  },
};

export default fonts;

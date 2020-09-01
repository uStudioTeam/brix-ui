import { Breakpoint } from '@ustudio-ui/types/css';
import { FontWeight } from '@ustudio-ui/types/typography';

import SSPBlack from './../../assets/fonts/SourceSansPro/SourceSansPro-Black.ttf';
import SSPBold from './../../assets/fonts/SourceSansPro/SourceSansPro-Bold.ttf';
import SSPLight from './../../assets/fonts/SourceSansPro/SourceSansPro-Light.ttf';
import SSPSemiBold from './../../assets/fonts/SourceSansPro/SourceSansPro-SemiBold.ttf';

import SSPRegular from './../../assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf';
import MBlack from './../../assets/fonts/Merriweather/Merriweather-Black.ttf';
import MLight from './../../assets/fonts/Merriweather/Merriweather-Light.ttf';

import MRegular from './../../assets/fonts/Merriweather/Merriweather-Regular.ttf';
import IExtraBold from './../../assets/fonts/Inconsolata/Inconsolata-ExtraBold.ttf';
import ILight from './../../assets/fonts/Inconsolata/Inconsolata-Light.ttf';
import IRegular from './../../assets/fonts/Inconsolata/Inconsolata-Regular.ttf';

export const defaultTheme = {
  typography: {
    body: {
      h1: {
        url: SSPBlack,
        weight: FontWeight.Black,
      },
      h2: {
        url: SSPBold,
        weight: FontWeight.Bold,
      },
      h3: {
        url: SSPBold,
        weight: FontWeight.Bold,
      },
      h4: {
        url: SSPLight,
        weight: FontWeight.Light,
      },
      h5: {
        url: SSPSemiBold,
        weight: FontWeight.SemiBold,
      },
      p: {
        url: SSPRegular,
        weight: FontWeight.Regular,
      },
      small: {
        url: SSPLight,
        weight: FontWeight.Light,
      },
    },
    fontBody: 'Source Sans Pro',

    article: {
      h1: {
        url: MBlack,
        weight: FontWeight.Black,
      },
      h2: {
        url: MBlack,
        weight: FontWeight.Black,
      },
      h3: {
        url: MBlack,
        weight: FontWeight.Black,
      },
      h4: {
        url: MLight,
        weight: FontWeight.Light,
      },
      h5: {
        url: MBlack,
        weight: FontWeight.Black,
      },
      p: {
        url: MRegular,
        weight: FontWeight.Regular,
      },
      small: {
        url: MRegular,
        weight: FontWeight.Regular,
      },
    },
    fontArticle: 'Merriweather',

    code: {
      h1: {
        url: IExtraBold,
        weight: FontWeight.ExtraBold,
      },
      h2: {
        url: IExtraBold,
        weight: FontWeight.ExtraBold,
      },
      h3: {
        url: IExtraBold,
        weight: FontWeight.ExtraBold,
      },
      h4: {
        url: ILight,
        weight: FontWeight.Light,
      },
      h5: {
        url: IExtraBold,
        weight: FontWeight.ExtraBold,
      },
      p: {
        url: IRegular,
        weight: FontWeight.Regular,
      },
      small: {
        url: IRegular,
        weight: FontWeight.Regular,
      },
    },
    fontCode: 'Inconsolata',
  },

  breakpoints: {
    [Breakpoint.Xs]: 0,
    [Breakpoint.Sm]: 576,
    [Breakpoint.Md]: 768,
    [Breakpoint.Lg]: 992,
    [Breakpoint.Xl]: 1200,
  },
};

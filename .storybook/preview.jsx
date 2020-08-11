import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import ThemeProvider from '@ustudio-ui/theme';
import { FontWeight } from '@ustudio-ui/types/typography';

import SSPBlack from './public/assets/fonts/SourceSansPro/SourceSansPro-Black.ttf';
import SSPBold from './public/assets/fonts/SourceSansPro/SourceSansPro-Bold.ttf';
import SSPLight from './public/assets/fonts/SourceSansPro/SourceSansPro-Light.ttf';
import SSPSemiBold from './public/assets/fonts/SourceSansPro/SourceSansPro-SemiBold.ttf';
import SSPRegular from './public/assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf';

import MBlack from './public/assets/fonts/Merriweather/Merriweather-Black.ttf';
import MLight from './public/assets/fonts/Merriweather/Merriweather-Light.ttf';
import MRegular from './public/assets/fonts/Merriweather/Merriweather-Regular.ttf';

import IExtraBold from './public/assets/fonts/Inconsolata/Inconsolata-ExtraBold.ttf';
import ILight from './public/assets/fonts/Inconsolata/Inconsolata-Light.ttf';
import IRegular from './public/assets/fonts/Inconsolata/Inconsolata-Regular.ttf';

addDecorator(withKnobs);

addDecorator(jsxDecorator);

addDecorator((story) => (
  <ThemeProvider
    theme={{
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
    }}
  >
    {story()}
  </ThemeProvider>
));

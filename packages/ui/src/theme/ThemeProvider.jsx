import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { GlobalStyle } from './global-style';
import merge from 'lodash.merge';

const defaultTheme = {
  breakpoint: {
    xs: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  indent: {
    small: '0.25rem',
    medium: '0.5rem',
    regular: '1rem',
    large: '2rem',
  },
  palette: {
    lightest: '#fcfcfc',
    light: '#f2f2f2',
    neutral: '#d8d8d8',
    dark: '#727272',
    darkest: '#1a1a1a',
    'negative-light': '#e3871a',
    negative: '#db821a',
    'positive-light': '#97e31a',
    positive: '#8dd419',
    'primary-light': '#1e96ff',
    primary: '#1a81db',
  },
  font: {
    body: 'Source Sans Pro',
    article: 'Lora',
    code: 'Source Code Pro',
  },
  layer: {
    topmost: 1000,
    top: 800,
    middle: 500,
    bottom: 100,
  },
  transition: '300ms',
  borderRadius: '0.125rem'
};

export const ThemeProvider = ({ override = {}, children }) => (
  <SCThemeProvider theme={merge(defaultTheme, override)}>
    <>
      {children}

      <GlobalStyle theme={merge(defaultTheme, override)} />
    </>
  </SCThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  override: PropTypes.exact({
    breakpoint: PropTypes.exact({
      xs: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
    indent: PropTypes.exact({
      small: PropTypes.string,
      medium: PropTypes.string,
      regular: PropTypes.string,
      large: PropTypes.string,
    }),
    palette: PropTypes.exact({
      ...[
        'primary',
        'positive',
        'negative',
        'darkest',
        'dark',
        'neutral',
        'light',
        'primary-light',
        'positive-light',
        'negative-light',
        'lightest',
      ].reduce((obj, color) => Object.assign(obj, { [color]: PropTypes.string }), {}),
    }),
    font: PropTypes.exact({
      body: PropTypes.string,
      article: PropTypes.string,
      code: PropTypes.string,
    }),
    layer: PropTypes.exact({
      topmost: PropTypes.number,
      top: PropTypes.number,
      middle: PropTypes.number,
      bottom: PropTypes.number,
    }),
    transition: PropTypes.string,
    borderRadius: PropTypes.string
  }),
};

ThemeProvider.defaultProps = {
  override: defaultTheme,
};

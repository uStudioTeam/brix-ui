import React, { useCallback, useMemo, useRef } from 'react';
import { createGlobalStyle, css, FlattenSimpleInterpolation } from 'styled-components';

import { capitalize, getCssVariable, objectKeys, objectValues, setCssVariable } from '@ustudio-ui/utils/functions';
import type { Keys, Values } from '@ustudio-ui/utils/types';
import { FontVariant } from '@ustudio-ui/types/typography';
import { Variable } from '@ustudio-ui/types/css';

import type { ThemeOverride } from '../entity';

import type { FontFamilyMap } from './entity';

const TypographyGlobalStyles = createGlobalStyle<{
  variables(): FlattenSimpleInterpolation;
  fontFaces(): FlattenSimpleInterpolation;
}>`
  :root {
    ${({ variables }) => variables()};
  }
  
    ${({ fontFaces }) => fontFaces()};
  
  html {
    font-size: 16px;
  }
  
  body {
    font-family: var(--f-body);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  small {
    line-height: 1.375;
  }
`;

const getFontName = (variant: Values<typeof FontVariant>): Keys<FontFamilyMap> => {
  return `font${capitalize(variant)}` as Keys<FontFamilyMap>;
};

const Typography = (props: ThemeOverride['typography']): JSX.Element => {
  const { current: fallbackFonts } = useRef<Record<Values<typeof FontVariant>, string>>({
    body: 'Sans-Serif',
    article: 'Serif',
    code: 'Monotype',
  });

  const { current: defaultFonts } = useRef<FontFamilyMap>({
    fontBody: `'Source Sans Pro'`,
    fontArticle: `Merriweather`,
    fontCode: `Inconsolata`,
  });

  const fontsNames = useMemo(() => {
    return objectValues(FontVariant).reduce((names, key) => {
      return Object.assign(names, {
        [key]: `${props?.[getFontName(key)] || defaultFonts[getFontName(key)]}, ${fallbackFonts[key]}`,
      });
    }, {} as Record<Values<typeof FontVariant>, string>);
  }, []);

  const fontFaces = useCallback(() => {
    if (props) {
      return objectValues(FontVariant).reduce((fontStyles, fontVariant) => {
        if (props[fontVariant]) {
          return css`
            ${fontStyles};

            ${objectKeys(props[fontVariant]).reduce((typeStyles, typeVariant) => {
              if (props[fontVariant]?.[typeVariant]) {
                const { url, format = 'truetype', weight } =
                  props[fontVariant]?.[typeVariant] || ({} as typeof props[typeof fontVariant][typeof typeVariant]);

                return css`
                  ${typeStyles};
      
                  @font-face {
                    font-family: '${getCssVariable(Variable.Font, fontVariant)}';
                    font-weight: ${weight};
                    font-display: fallback;
                    
                    src: url('${url}') format('${format}');
                  }
                `;
              }

              return typeStyles;
            }, css``)};
          `;
        }

        return fontStyles;
      }, css``);
    }

    return css``;
  }, [JSON.stringify(props)]);

  const variables = useCallback(() => {
    return objectValues(FontVariant).map((key) => {
      return css`
        ${setCssVariable('f', key, fontsNames[key])};
      `;
    });
  }, []);

  return <TypographyGlobalStyles variables={variables} fontFaces={fontFaces} />;
};

export default Typography;

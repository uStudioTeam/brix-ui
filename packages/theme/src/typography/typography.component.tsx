import React, { useCallback } from 'react';
import { createGlobalStyle, css, FlattenSimpleInterpolation } from 'styled-components';

import { capitalize, objectKeys, setCssVariable } from '@ustudio-ui/utils/functions';
import { FontVariant } from '@ustudio-ui/types/typography';

import { FontsFacesMap } from './entity';
import type { WithTheme } from '../theme';

const TypographyGlobalStyles = createGlobalStyle<{
  variables(props: WithTheme): FlattenSimpleInterpolation;
  fontFaces(props: WithTheme): FlattenSimpleInterpolation;
}>`
  :root {
    ${({ variables, theme }) => variables({ theme })};
  
    ${({ fontFaces, theme }) => fontFaces({ theme })};
  }
  
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

const getFontName = ({ font, theme }: WithTheme<{ font: string }>): string => {
  return theme.typography[`font${capitalize(font)}` as keyof typeof theme['typography']] as string;
};

const Typography = (props: FontsFacesMap): JSX.Element => {
  const fontFaces = useCallback(
    ({ theme }: WithTheme) => {
      return objectKeys(props).reduce((fontStyles, font) => {
        return css`
          ${fontStyles};

          ${objectKeys(props?.[font] || {}).reduce((typeStyles, type) => {
            const { url, format = 'truetype', weight } =
              props?.[font][type] ?? ({} as typeof props[typeof font][typeof type]);

            return css`
              ${typeStyles};
  
              @font-face {
                font-family: '${getFontName({ font, theme })}';
                font-weight: ${weight};
                font-display: fallback;
                
                src: url('${url}') format('${format}');
              }
          `;
          }, css``)};
        `;
      }, css``);
    },
    [JSON.stringify(props)]
  );

  const variables = useCallback(({ theme }: WithTheme) => {
    return Object.keys(FontVariant).map((key) => {
      const font = FontVariant[key as keyof typeof FontVariant];

      return css`
        ${setCssVariable('f', font, `'${getFontName({ font, theme })}'`)};
      `;
    });
  }, []);

  return <TypographyGlobalStyles variables={variables} fontFaces={fontFaces} />;
};

export default Typography;

import React, { useMemo } from 'react';
import { css, createGlobalStyle, FlattenSimpleInterpolation } from 'styled-components';
import merge from 'lodash.merge';

import { objectKeys } from '@brix-ui/utils/functions';

import { defaultFontFaces } from '../entity';

import type { FontsProps } from './fonts.props';

const FontsGlobalStyle = createGlobalStyle<{
  fontFaces: FlattenSimpleInterpolation;
  variables: FlattenSimpleInterpolation;
}>`
  
  ${({ fontFaces, variables }) => {
    return css`
      ${variables};

      ${fontFaces};
    `;
  }};
`;

const Fonts = (props = {} as FontsProps): JSX.Element => {
  const mergedProps = useMemo(() => merge({ ...defaultFontFaces }, { ...props }), [JSON.stringify(props)]);

  const variables = useMemo(() => {
    const { body, article, code } = mergedProps;

    return css`
      :root {
        --f-body: ${body?.name};
        --f-article: ${article?.name};
        --f-code: ${code?.name};
      }
    `;
  }, [JSON.stringify(mergedProps)]);

  const fontFaces = useMemo(() => {
    return objectKeys(mergedProps).reduce((styles, fontVariant) => {
      const { name: _, ...typeVariants } = mergedProps[fontVariant] || {};

      return css`
        ${styles}

        ${objectKeys(typeVariants).reduce((declarations, typeVariant) => {
          const { src, weight } = typeVariants[typeVariant] || {};

          return css`
            ${declarations};

            @font-face {
              font-family: 'var(--f-${fontVariant})';
              font-weight: ${weight};
              font-display: fallback;

              src: ${src};
            }
          `;
        }, css``)}
      `;
    }, css``);
  }, [JSON.stringify(mergedProps)]);

  return <FontsGlobalStyle fontFaces={fontFaces} variables={variables} />;
};

export default Fonts;

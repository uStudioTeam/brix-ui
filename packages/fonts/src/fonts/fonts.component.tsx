import React, { useMemo } from 'react';
import PT from 'prop-types';
import { css, createGlobalStyle, FlattenSimpleInterpolation } from 'styled-components';
import merge from 'lodash.merge';

import { objectKeys, objectValues } from '@brix-ui/utils/functions';
import { record } from '@brix-ui/prop-types/utils';
import { FontVariant, TypeVariant } from '@brix-ui/types/typography';

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

Fonts.propTypes = record(
  objectValues(FontVariant),
  PT.exact({
    name: PT.string,
    ...record(
      objectValues(TypeVariant),
      PT.exact({
        src: PT.string.isRequired,
        weight: PT.oneOfType([PT.number, PT.string]).isRequired,
      })
    ),
  })
);

export default Fonts;

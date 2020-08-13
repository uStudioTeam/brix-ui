import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { font } from '@ustudio-ui/theme/typography';
import { TypeVariant, FontVariant } from '@ustudio-ui/types/typography';

import type { TextProps } from './text.props';

const parseTextDecoration = (textDecoration: TextProps['textDecoration']): FlattenSimpleInterpolation => {
  switch (textDecoration) {
    case 'underline':
    case 'line-through': {
      return css`
        text-decoration: ${textDecoration};
      `;
    }
    case 'italic': {
      return css`
        font-style: italic;
      `;
    }
    default: {
      return css``;
    }
  }
};

const Text = styled.p<
  Omit<TextProps, 'color' | 'align'> & {
    $color?: TextProps['color'];
    $align?: TextProps['align'];
  }
>(
  ({ variant = TypeVariant.P, appearance = FontVariant.Body, $color, $align, textDecoration }) => css`
    ${font[appearance][variant]};

    color: ${$color};
    text-align: ${$align};

    ${parseTextDecoration(textDecoration)};
  `
);

const Styled = applyDisplayNames({ Text });

export default Styled;

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { compensateLineHeight, font } from '@ustudio-ui/theme/mixin';
import { TypeVariant, FontVariant } from '@ustudio-ui/types/typography';

import type { TextProps } from './text.props';

const parseTextDecoration = (decoration: TextProps['decoration']): FlattenSimpleInterpolation => {
  switch (decoration) {
    case 'underline':
    case 'line-through': {
      return css`
        text-decoration: ${decoration};
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
  ({
    variant = TypeVariant.P,
    appearance = FontVariant.Body,
    $color: color,
    $align: align,
    decoration,
    lineHeightCompensation,
  }) => css`
    ${font[appearance][variant]};

    color: ${color};
    text-align: ${align};

    ${parseTextDecoration(decoration)};

    margin-top: ${typeof lineHeightCompensation === 'function'
      ? `${lineHeightCompensation(variant)}px`
      : lineHeightCompensation && `${compensateLineHeight(variant)}px`};
  `
);

const Styled = applyDisplayNames({ Text });

export default Styled;

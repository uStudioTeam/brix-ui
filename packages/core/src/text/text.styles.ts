import { Values } from '@brix-ui/utils/types';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { compensateLineHeight, font } from '@brix-ui/theme/mixin';
import { TypeVariant, FontVariant } from '@brix-ui/types/typography';

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

const parseWeight = (weight: TextProps['weight']): TextProps['weight'] => {
  switch (weight) {
    case 'thin': {
      return 100;
    }
    case 'extra-light': {
      return 200;
    }
    case 'light': {
      return 300;
    }
    case 'regular': {
      return 400;
    }
    case 'medium': {
      return 500;
    }
    case 'semi-bold': {
      return 600;
    }
    case 'extra-bold': {
      return 800;
    }
    case 'black': {
      return 900;
    }
    default: {
      return weight;
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
    as = TypeVariant.P,
    variant,
    appearance = FontVariant.Body,
    $color: color,
    $align: align,
    decoration,
    weight,
    lineHeightCompensation,
    theme,
  }) => {
    const defaultVariant = variant || TypeVariant.P;

    return css`
      ${font[appearance][variant || (as as Values<typeof TypeVariant>)] || font[appearance].p};

      color: ${theme.colorHelper.parseColor(color)};
      text-align: ${align};
      font-weight: ${parseWeight(weight)};

      ${parseTextDecoration(decoration)};

      margin-top: ${typeof lineHeightCompensation === 'function'
        ? `${lineHeightCompensation(defaultVariant)}px`
        : lineHeightCompensation && `${compensateLineHeight(defaultVariant)}px`};
    `;
  }
);

const Styled = applyDisplayNames({ Text });

export default Styled;

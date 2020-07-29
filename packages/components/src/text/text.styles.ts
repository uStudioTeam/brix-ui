import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { TypeVariant, FontVariant } from '@ustudio-ui/types/typography';

import type { TextProps } from './text.props';

const Text = styled.p<
  Pick<TextProps, 'variant' | 'appearance' | 'textDecoration'> & {
    $color?: TextProps['color'];
    $align?: TextProps['align'];
  }
>(({ variant = TypeVariant.P, appearance = FontVariant.Body, $color, $align, textDecoration }) => {
  const parseTextDecoration = (): string => {
    switch (textDecoration) {
      case 'underline':
      case 'line-through': {
        return `text-decoration: ${textDecoration}`;
      }
      case 'italic': {
        return 'font-variant: italic';
      }
      default: {
        return '';
      }
    }
  };

  return css`
    ${font[appearance][variant]};

    color: ${$color};
    text-align: ${$align};

    ${parseTextDecoration()};
  `;
});

const Styled = { Text };

export default Styled;

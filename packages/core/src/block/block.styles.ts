import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import type { Gapable } from '@brix-ui/types/component';
import { applyDisplayNames, parseIndent } from '@brix-ui/utils/functions';

import type { BlockProps } from './block.props';

const parseGap = ({
  gap,
  verticalGap,
  horizontalGap,
}: Pick<BlockProps, keyof Gapable>): FlattenSimpleInterpolation | undefined => {
  /**
   * @deprecated
   */
  if (typeof gap === 'object') {
    return css`
      & > *:not(:last-child) {
        margin-right: ${gap.horizontal};
        margin-bottom: ${gap.vertical};
      }
    `;
  }

  if (typeof gap === 'string') {
    return css`
      & > *:not(:last-child) {
        margin-right: ${gap};
        margin-bottom: ${gap};
      }
    `;
  }

  return css`
    & > *:not(:last-child) {
      margin-right: ${horizontalGap};
      margin-bottom: ${verticalGap};
    }
  `;
};

const Block = styled.div<
  Omit<BlockProps, 'margin' | 'padding' | 'gap' | 'isInline'> & {
    $margin?: BlockProps['margin'];
    $padding?: BlockProps['padding'];
    $gap?: BlockProps['gap'];
  }
>(
  ({ $margin: margin, $padding: padding, $gap: gap, horizontalGap, verticalGap }) => css`
    display: block;

    margin: ${parseIndent(margin)};
    padding: ${parseIndent(padding)};

    ${parseGap({ gap, horizontalGap, verticalGap })};

    &[data-inline] {
      display: inline-block;
    }
  `
);

const Styled = applyDisplayNames({ Block });

export default Styled;

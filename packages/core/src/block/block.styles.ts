import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { applyDisplayNames, parseIndent } from '@brix-ui/utils/functions';

import type { BlockProps } from './block.props';

const parseGap = (gap: BlockProps['gap']): FlattenSimpleInterpolation | undefined => {
  if (!gap) {
    return;
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
      margin-right: ${gap.horizontal};
      margin-bottom: ${gap.vertical};
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
  ({ $margin: margin, $padding: padding, $gap: gap }) => css`
    display: block;

    margin: ${parseIndent(margin)};
    padding: ${parseIndent(padding)};

    ${parseGap(gap)};

    &[data-inline] {
      display: inline-block;
    }
  `
);

const Styled = applyDisplayNames({ Block });

export default Styled;

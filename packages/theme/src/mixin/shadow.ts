import { css, FlattenSimpleInterpolation } from 'styled-components';
import { transparentize } from 'polished';

import type { WithTheme } from '@brix-ui/theme/entity';

export function shadow(color: string, alpha: number) {
  return ({ theme }: WithTheme): FlattenSimpleInterpolation => {
    return css`0 2px 8px ${transparentize(1 - alpha, theme.colorHelper.parseColor(color))};`;
  };
}

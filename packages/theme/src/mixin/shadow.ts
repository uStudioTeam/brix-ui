import { css, FlattenSimpleInterpolation } from 'styled-components';
import { transparentize } from 'polished';

import type { WithTheme } from '@ustudio-ui/theme/entity';

export const shadow = (color: string, alpha: number) => ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  return css`0 2px 8px ${transparentize(1 - alpha, theme.colorHelper.parseColor(color))};`;
};

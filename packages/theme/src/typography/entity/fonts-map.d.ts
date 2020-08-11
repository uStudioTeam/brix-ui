import { Values } from '@ustudio-ui/utils/types';
import { FlattenSimpleInterpolation } from 'styled-components';

import { FontVariant, FontWeight, TypeVariant } from '@ustudio-ui/types/typography';

type FontsMap<T = string> = Record<Values<typeof FontVariant>, Record<Values<typeof TypeVariant>, T>>;

export type FontsFacesMap = FontsMap<{
  url: string;
  weight: Values<typeof FontWeight>;
  format?: string;
}>;

export type FontsCssMap = Required<FontsMap<FlattenSimpleInterpolation>>;

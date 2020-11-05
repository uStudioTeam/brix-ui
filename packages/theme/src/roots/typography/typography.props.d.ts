import type { Values } from '@brix-ui/utils/types';
import { FontVariant } from '@brix-ui/types/typography';

export interface TypographyProps {
  readonly rootFontSize: string;
  readonly defaultFontFamily: string;
  readonly baseLineHeight: string | number;
  readonly font: Readonly<Record<Values<typeof FontVariant>, string>>;
}

import { Axis, Indent, IntrinsicComponent } from '@ustudio-ui/types/component';
import type { HtmlTag, TextTag } from '@ustudio-ui/types/html';
import { Values } from '@ustudio-ui/utils/types';

export interface BlockProps extends IntrinsicComponent {
  as?: Exclude<HtmlTag, TextTag>;

  isInline?: boolean;

  margin?: Indent;
  padding?: Indent;
  gap?: Partial<Record<Values<typeof Axis>, string>> | string;
}

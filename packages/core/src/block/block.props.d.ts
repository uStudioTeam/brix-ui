import type { Indent, IntrinsicComponent } from '@ustudio-ui/types/component';
import type { HtmlTag, TextTag } from '@ustudio-ui/types/html';

export interface BlockProps extends IntrinsicComponent {
  as?: Exclude<HtmlTag, TextTag>;

  isInline?: boolean;

  margin?: Indent;
  padding?: Indent;
  gap?: string;
}

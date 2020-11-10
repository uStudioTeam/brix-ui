import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { Gapable, Indent, IntrinsicComponent, StylableComponent, Taggable } from '@brix-ui/types/component';
import type { HtmlTag, TextTag } from '@brix-ui/types/html';

export interface BlockProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLElement>>>,
    StylableComponent,
    Gapable,
    Taggable<Exclude<HtmlTag, TextTag>> {
  isInline?: boolean;

  margin?: Indent;
  padding?: Indent;
}

import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { Gapable, Indent, IntrinsicComponent, StylableComponent, Taggable } from '@brix-ui/types/component';
import type { HtmlTag } from '@brix-ui/types/html';

export interface BlockProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLElement>>>,
    StylableComponent,
    Gapable,
    Taggable<HtmlTag> {
  isInline?: boolean;

  margin?: Indent;
  padding?: Indent;
}

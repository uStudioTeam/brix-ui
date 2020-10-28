import type { HTMLAttributes, PropsWithChildren } from 'react';

import { Axis, Indent, IntrinsicComponent, StylableComponent, Taggable } from '@brix-ui/types/component';
import type { HtmlTag, TextTag } from '@brix-ui/types/html';
import type { Values } from '@brix-ui/utils/types';

export interface BlockProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLElement>>>,
    StylableComponent,
    Taggable<Exclude<HtmlTag, TextTag>> {
  isInline?: boolean;

  margin?: Indent;
  padding?: Indent;
  gap?: Partial<Record<Values<typeof Axis>, string>> | string;
}

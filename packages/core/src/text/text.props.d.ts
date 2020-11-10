import type { HTMLAttributes, LabelHTMLAttributes, PropsWithChildren } from 'react';

import { FontVariant, FontWeight, TextAlign, TextDecoration, TypeVariant } from '@brix-ui/types/typography';
import type { IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';
import type { Values } from '@brix-ui/utils/types';
import type { TextElement, TextTag } from '@brix-ui/types/html';

export interface TextProps
  extends PropsWithChildren<IntrinsicComponent<HTMLAttributes<TextElement> & LabelHTMLAttributes<HTMLLabelElement>>>,
    StylableComponent {
  as?: TextTag;
  variant?: Values<typeof TypeVariant>;
  appearance?: Values<typeof FontVariant>;

  color?: string;
  align?: Values<typeof TextAlign>;
  decoration?: Values<typeof TextDecoration>;
  weight?:
    | Values<typeof FontWeight>
    | 'thin'
    | 'extra-light'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semi-bold'
    | 'bold'
    | 'extra-bold'
    | 'black'
    | 'normal'
    | 'lighter'
    | 'bolder';

  lineHeightCompensation?: boolean | ((variant: NonNullable<TextProps['variant']>) => number);
}

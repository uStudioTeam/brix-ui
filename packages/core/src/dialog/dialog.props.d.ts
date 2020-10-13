import type { DialogHTMLAttributes, PropsWithChildren } from 'react';

import type {
  BreakpointsProps,
  Disclosable,
  IntrinsicComponent,
  PolymorphicBreakpointProp,
  StylableComponent,
  Unmountable,
} from '@brix-ui/types/component';
import type { Values } from '@brix-ui/utils/types';
import { TextAlign } from '@brix-ui/types/typography';

export interface DialogBreakpointProps {
  top?: PolymorphicBreakpointProp;
  margin?: PolymorphicBreakpointProp;
  maxWidth?: PolymorphicBreakpointProp;
  maxHeight?: PolymorphicBreakpointProp;
}

export interface DialogProps
  extends Disclosable,
    Unmountable,
    BreakpointsProps<DialogBreakpointProps>,
    PropsWithChildren<IntrinsicComponent<DialogHTMLAttributes<HTMLDialogElement>>>,
    StylableComponent<['margin', 'padding', 'titleColor']> {
  title?: string;
  titleAlign?: Exclude<Values<typeof TextAlign>, 'right'>;
}

import type { DialogHTMLAttributes, PropsWithChildren } from 'react';
import { StyledComponent } from 'styled-components';

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

import { Dialog, Header, Title, CloseContainer, CloseButton, CloseIcon, Body } from './dialog.styles';

interface Styled {
  Dialog: typeof Dialog extends StyledComponent<any, infer T, infer O, infer A>
    ? StyledComponent<'dialog', T, O, A>
    : never;
  Header: typeof Header;
  Title: typeof Title;
  CloseContainer: typeof CloseContainer;
  CloseButton: typeof CloseButton;
  CloseIcon: typeof CloseIcon;
  Body: typeof Body;
}

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
    StylableComponent<Styled> {
  title?: string;
  titleAlign?: Exclude<Values<typeof TextAlign>, 'right'>;
}

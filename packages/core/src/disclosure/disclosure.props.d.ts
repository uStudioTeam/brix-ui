import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import type { Disclosable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

import { Container, Icon, Summary, Details } from './disclosure.styles';

interface Styled {
  Container: typeof Container;
  Icon: typeof Icon;
  Summary: typeof Summary;
  Details: typeof Details;
}

export interface DisclosureProps
  extends Disclosable,
    PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLDivElement>>>,
    StylableComponent<Styled> {
  summary?: ReactNode;
  icon?: ReactNode | ((props: Pick<DisclosureProps, 'isOpen' | 'isDisabled'>) => ReactNode);

  isDisabled?: boolean;
}

import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import type { Disclosable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface DisclosureProps
  extends Disclosable,
    PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLDivElement>>>,
    StylableComponent<'iconIndent'> {
  summary?: ReactNode;
  icon?: ReactNode | ((props: Pick<DisclosureProps, 'isOpen' | 'isDisabled'>) => ReactNode);

  isDisabled?: boolean;
}

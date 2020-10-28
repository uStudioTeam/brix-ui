import type { ReactNode } from 'react';

import type { Disclosable, Unmountable } from '@brix-ui/types/component';
import useDisclose from '@brix-ui/hooks/use-disclose';

export interface ModalValue {
  shouldBeOpen: boolean;
  shouldMount: boolean;
  toggle: ReturnType<typeof useDisclose>[1];
}

export interface ModalProps extends Disclosable, Unmountable {
  children: ((props: ModalValue) => ReactNode) | ReactNode;
}

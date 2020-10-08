import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { Intent, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';
import type { Values } from '@brix-ui/utils/types';

export interface ButtonProps
  extends PropsWithChildren<Omit<IntrinsicComponent<ButtonHTMLAttributes<HTMLButtonElement>>, 'disabled'>>,
    StylableComponent {
  intent?: Values<typeof Intent>;
  appearance?: 'contained' | 'outlined' | 'text' | 'faint';

  isRounded?: boolean;
  isDisabled?: boolean;
}

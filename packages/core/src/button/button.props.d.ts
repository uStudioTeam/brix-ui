import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { Intentable, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface ButtonProps
  extends PropsWithChildren<Omit<IntrinsicComponent<ButtonHTMLAttributes<HTMLButtonElement>>, 'disabled'>>,
    Intentable,
    StylableComponent {
  appearance?: 'contained' | 'outlined' | 'text' | 'faint';

  isRounded?: boolean;
  isDisabled?: boolean;
}

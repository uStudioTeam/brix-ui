import type { InputHTMLAttributes, Ref } from 'react';

import type { IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';

export interface RadioButtonProps
  extends Omit<
      IntrinsicComponent<InputHTMLAttributes<HTMLInputElement>>,
      'defaultValue' | 'checked' | 'defaultChecked' | 'onChange' | 'name'
    >,
    StylableComponent {
  value: string;

  containerRef?: Ref<HTMLLabelElement>;
}

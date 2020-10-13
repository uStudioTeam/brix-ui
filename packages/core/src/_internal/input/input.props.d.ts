import type { Ref, InputHTMLAttributes } from 'react';

import type { Affixable, FormComponent, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface InputProps<V extends string | number>
  extends Affixable,
    FormComponent<HTMLInputElement, V>,
    IntrinsicComponent<InputHTMLAttributes<HTMLInputElement>>,
    StylableComponent {
  type: HTMLInputElement['type'] | undefined;

  containerRef?: Ref<HTMLLabelElement>;
}

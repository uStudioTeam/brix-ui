import type { InputHTMLAttributes, Ref } from 'react';

import type { FormComponent, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface CheckboxProps
  extends Omit<FormComponent<HTMLInputElement, boolean>, 'isReadonly'>,
    IntrinsicComponent<Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'defaultChecked' | 'readOnly'>>,
    StylableComponent {
  containerRef?: Ref<HTMLLabelElement>;
}

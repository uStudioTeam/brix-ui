import type { InputHTMLAttributes, ReactNode, Ref } from 'react';

import type { FormComponent, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface CheckboxProps
  extends Omit<FormComponent<HTMLInputElement, boolean>, 'isReadonly'>,
    IntrinsicComponent<Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'defaultChecked' | 'readOnly'>>,
    StylableComponent<'iconSize'> {
  containerRef?: Ref<HTMLLabelElement>;

  icon?: ((props: Pick<CheckboxProps, 'value' | 'isDisabled' | 'isInvalid'>) => ReactNode) | ReactNode;
}

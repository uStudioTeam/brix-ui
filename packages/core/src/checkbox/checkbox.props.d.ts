import type { InputHTMLAttributes, Ref } from 'react';

import type { FormComponent, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

import { Checkbox, CheckIcon } from './checkbox.styles';

interface Styled {
  Checkbox: typeof Checkbox;
  CheckIcon: typeof CheckIcon;
}

export interface CheckboxProps
  extends Omit<FormComponent<HTMLInputElement, boolean>, 'isReadonly'>,
    IntrinsicComponent<Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'defaultChecked' | 'readOnly'>>,
    StylableComponent<Styled> {
  containerRef?: Ref<HTMLLabelElement>;
}

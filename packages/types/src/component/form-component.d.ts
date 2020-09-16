import type { ChangeEvent, HTMLAttributes } from 'react';

import type { IntrinsicComponent } from './intrinsic-component';

export interface FormComponent<P, E extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, V>
  extends Omit<
    IntrinsicComponent<HTMLAttributes<P<E>>>,
    'disabled' | 'readOnly' | 'required' | 'invalid' | 'value' | 'defaultValue' | 'onChange'
  > {
  value?: V;
  defaultValue?: V;

  isDisabled?: boolean;
  isReadonly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;

  onChange?(value: V | undefined, event: ChangeEvent<E>): void;
}

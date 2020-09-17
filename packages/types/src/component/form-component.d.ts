import type { ChangeEvent } from 'react';

export interface FormComponent<E extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, V> {
  value?: V;
  defaultValue?: V;

  isDisabled?: boolean;
  isReadonly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;

  onChange?(value: V | undefined, event: ChangeEvent<E>): void;
}

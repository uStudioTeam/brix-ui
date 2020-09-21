import type { ChangeEvent, ReactNode } from 'react';

import type { FormComponent } from '@brix-ui/types/component';

import type { RadioGroupDispatcher } from './actions';
import type { RadioGroupState } from './reducer';

export interface RadioGroupProps extends Omit<FormComponent<HTMLInputElement, string>, 'isReadonly'> {
  name: string;
  children: ReactNode | ((props: RadioGroupValue) => ReactNode);
}

export interface RadioGroupValue
  extends Pick<RadioGroupProps, 'name' | 'isDisabled' | 'isRequired' | 'isInvalid'>,
    RadioGroupState {
  dispatcher: RadioGroupDispatcher;
  handleChange(optionValue: string, event: ChangeEvent<HTMLInputElement>): void;
}

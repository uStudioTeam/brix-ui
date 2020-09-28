import type { ChangeEvent, ReactNode } from 'react';

import type { SingleSelection } from '@brix-ui/hooks/use-single-selection';
import type { FormComponent } from '@brix-ui/types/component';

export interface RadioGroupProps extends Omit<FormComponent<HTMLInputElement, string>, 'isReadonly'> {
  name: string;
  children: ReactNode | ((props: RadioGroupValue) => ReactNode);
}

export interface RadioGroupState extends Pick<SingleSelection<string>, 'value' | 'options'> {
  isDisabled: boolean | undefined;
  isInvalid: boolean | undefined;
  isRequired: boolean | undefined;
}

export interface RadioGroupValue
  extends Pick<RadioGroupProps, 'name' | 'isDisabled' | 'isRequired' | 'isInvalid'>,
    RadioGroupState {
  dispatcher: SingleSelection<string>['dispatch'];
  handleChange(optionValue: string, event: ChangeEvent<HTMLInputElement>): void;
}

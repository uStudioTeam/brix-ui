import type { SelectHTMLAttributes, Ref, ReactNode } from 'react';

import type { Affixable, FormComponent, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

export interface DropdownOption {
  value: string;
  label?: string;
}

export interface DropdownProps
  extends Omit<FormComponent<HTMLSelectElement, string>, 'isReadonly'>,
    Affixable,
    Omit<
      IntrinsicComponent<SelectHTMLAttributes<HTMLSelectElement>>,
      'disabled' | 'required' | 'readonly' | 'multiple' | 'size'
    >,
    StylableComponent {
  children: (props: {
    isOptionSelected(optionValue: string): boolean;
    isOptionDisabled(optionValue: string): boolean;
  }) => ReactNode;

  options: DropdownOption[];

  placeholder?: string;

  disabledOptions?: string[];

  containerRef?: Ref<HTMLLabelElement>;
}

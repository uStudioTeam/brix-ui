import type { ChangeEvent, Ref, SelectHTMLAttributes } from 'react';

import type { Affixable, FormComponent, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';

import { Select, Icon } from './select.styles';

interface Styled {
  Select: typeof Select;
  Icon: typeof Icon;
}

export interface SelectOption {
  value: string;
  label?: string;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps
  extends Omit<FormComponent<HTMLSelectElement, string>, 'isReadonly' | 'onChange'>,
    Affixable,
    Omit<
      IntrinsicComponent<SelectHTMLAttributes<HTMLSelectElement>>,
      'disabled' | 'required' | 'readonly' | 'multiple' | 'size'
    >,
    StylableComponent<Styled> {
  options: SelectGroup[] | SelectOption[];
  placeholder?: string;

  /**
   * Array of groups' indices
   */
  disabledGroups?: number[];
  /**
   * Array of options' values
   */
  disabledOptions?: string[];

  containerRef?: Ref<HTMLLabelElement>;

  onChange?(value: string | undefined, event: ChangeEvent<HTMLSelectElement>): void;
}

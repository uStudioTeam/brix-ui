import type { StylableComponent } from '@brix-ui/types/component';

import type { DropdownProps, DropdownOption as SelectOption } from '../_internal/dropdown';

export { SelectOption };

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps extends Omit<DropdownProps, 'styles' | 'children'>, StylableComponent {
  options: SelectGroup[] | SelectOption[];

  /**
   * Array of groups' indices
   */
  disabledGroups?: number[];
}

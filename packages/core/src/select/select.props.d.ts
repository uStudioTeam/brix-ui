import type { StylableComponent } from '@brix-ui/types/component';

import type { DropdownProps, DropdownOption as SelectOption } from '../_internal/dropdown';

import { Select, Icon } from './select.styles';

interface Styled {
  Select: typeof Select;
  Icon: typeof Icon;
}

export { SelectOption };

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps
  extends Omit<DropdownProps, 'isReadonly' | 'styles' | 'children'>,
    StylableComponent<Styled> {
  options: SelectGroup[] | SelectOption[];

  /**
   * Array of groups' indices
   */
  disabledGroups?: number[];
}

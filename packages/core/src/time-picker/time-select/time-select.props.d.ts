import type { StylableComponent } from '@brix-ui/types/component';

import type { DropdownProps } from '../../_internal/dropdown';
import type { TimePickerChild } from '../entity';

export interface TimeSelectProps
  extends TimePickerChild,
    Omit<
      DropdownProps,
      'styles' | 'children' | 'value' | 'defaultValue' | 'onChange' | 'isRequired' | 'isInvalid' | 'prefix' | 'suffix'
    >,
    StylableComponent {
  options?: string[];

  disabledOptions?: ((option: string) => boolean) | string[];
}

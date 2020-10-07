import type { StylableComponent } from '@brix-ui/types/component';

import type { DropdownProps } from '../../_internal/dropdown';
import type { TimePickerChild } from '../entity';

import { TimeSelect, Input } from './time-select.styles';

interface Styled {
  TimeSelect: typeof TimeSelect;
  Input: typeof Input;
}

export interface TimeSelectProps
  extends TimePickerChild,
    Omit<
      DropdownProps,
      'styles' | 'children' | 'value' | 'defaultValue' | 'onChange' | 'isRequired' | 'isInvalid' | 'prefix' | 'suffix'
    >,
    StylableComponent<Styled> {
  options?: string[];

  disabledOptions?: ((option: string) => boolean) | string[];
}

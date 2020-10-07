import type { InputProps } from '../../_internal/input';
import type { TimePickerChild } from '../entity';

export interface TimeInputProps
  extends TimePickerChild,
    Omit<
      InputProps<number>,
      | 'type'
      | 'inputMode'
      | 'styles'
      | 'value'
      | 'defaultValue'
      | 'onChange'
      | 'prefix'
      | 'suffix'
      | 'isDisabled'
      | 'isRequired'
      | 'isInvalid'
      | 'isReadonly'
    > {
  min?: number;
  max?: number;
}

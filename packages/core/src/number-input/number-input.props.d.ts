import { InputProps } from '../_internal/input';

export interface NumberInputProps extends InputProps<number> {
  type: 'numeric' | 'decimal' | 'tel';
}

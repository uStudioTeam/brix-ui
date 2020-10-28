import { InputProps } from '../_internal/input';

export interface NumberInputProps extends InputProps<number> {
  type?: 'tel' | 'numeric' | 'decimal';
  inputMode?: 'tel' | 'numeric' | 'decimal';
}

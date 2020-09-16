import { InputProps } from '@ustudio-ui/core/_internal/input';

export interface NumberInputProps extends InputProps<number> {
  type: 'numeric' | 'decimal' | 'tel';
}

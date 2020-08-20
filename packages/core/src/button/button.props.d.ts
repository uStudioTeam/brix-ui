import { IntrinsicComponent } from '@ustudio-ui/types/component';

export interface ButtonProps extends Omit<IntrinsicComponent<HTMLButtonElement>, 'disabled'> {
  intent?: 'base' | 'accent' | 'critical' | 'success';
  appearance?: 'contained' | 'outlined' | 'text' | 'faint';
  isDisabled?: boolean;
}

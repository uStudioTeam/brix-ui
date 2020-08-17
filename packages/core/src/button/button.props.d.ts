import { IntrinsicComponent } from '@ustudio-ui/types/component';

export interface ButtonProps extends IntrinsicComponent<HTMLButtonElement> {
  intent?: 'base' | 'accent' | 'critical' | 'success';
  appearance?: 'contained' | 'outlined' | 'text' | 'faint';
  isDisabled?: boolean;
}
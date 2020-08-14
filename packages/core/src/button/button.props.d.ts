import { IntrinsicComponent } from '@ustudio-ui/types/component';

export interface ButtonProps extends IntrinsicComponent {
  intent?: 'variant' | 'accent' | 'critical' | 'success';
  appearance?: 'contained' | 'outlined' | 'text' | 'faint';
  isDisabled?: boolean;
}
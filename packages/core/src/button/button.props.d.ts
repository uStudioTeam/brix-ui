import { IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';

export interface ButtonProps extends Omit<IntrinsicComponent<HTMLButtonElement>, 'disabled'>, StylableComponent {
  intent?: 'base' | 'accent' | 'critical' | 'success';
  appearance?: 'contained' | 'outlined' | 'text' | 'faint';
  borderRadius?: 'small' | 'large';
  isDisabled?: boolean;
}

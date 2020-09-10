import { Intent, IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';
import { Values } from '@ustudio-ui/utils/types';

export interface ButtonProps extends Omit<IntrinsicComponent<HTMLButtonElement>, 'disabled'>, StylableComponent {
  intent?: Values<typeof Intent>;
  appearance?: 'contained' | 'outlined' | 'text' | 'faint';
  borderRadius?: 'small' | 'large';
  isDisabled?: boolean;
}

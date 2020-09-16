import { Values } from '@ustudio-ui/utils/types';
import { Intent } from '@ustudio-ui/types/css';

export interface StatusProps {
  intent: Values<typeof Intent>;
  isWeak?: boolean;
  animation?: 'pulsing' | 'saturating' | 'none';
}

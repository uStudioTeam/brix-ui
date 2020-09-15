export interface StatusProps {
  intent: 'success' | 'critical' | 'accent';
  isWeak?: boolean;
  animation?: 'pulsing' | 'saturating' | 'none';
}

import type { ReactNode } from 'react';

export interface PortalProps {
  children?: ReactNode;

  container?: Element | null;
}

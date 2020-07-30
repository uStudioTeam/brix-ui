import { HTMLAttributes } from 'react';

export interface IntrinsicComponent<E extends HTMLElement> extends HTMLAttributes<E> {
  className?: string;
}

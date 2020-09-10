import type { HTMLAttributes } from 'react';

export type IntrinsicComponent<E = HTMLElement> = Omit<HTMLAttributes<E>, 'style'>;

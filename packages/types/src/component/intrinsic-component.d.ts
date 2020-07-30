import { HTMLAttributes } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface IntrinsicComponent<E = HTMLElement> extends HTMLAttributes<E> {
  className?: string;
  styles?: FlattenSimpleInterpolation | Record<string, FlattenSimpleInterpolation>;
}

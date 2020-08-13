import { HTMLAttributes } from 'react';
// import { FlattenSimpleInterpolation } from 'styled-components';

/**
 * @ToDo: Clarify styling of inner components
 * Similar to [styled in v1](https://ustudiocompany.github.io/ustudio-ui/docs/theming/#styled)
 */

export interface IntrinsicComponent<E = HTMLElement> extends HTMLAttributes<E> {
  className?: string;
  // styles?: FlattenSimpleInterpolation | Record<string, FlattenSimpleInterpolation>;
}

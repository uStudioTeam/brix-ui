import type { StyledComponent } from 'styled-components';

export type StylableComponent<S extends Record<string, StyledComponent<any, any>> = undefined> = (S extends undefined
  ? {}
  : {
      styles?: Partial<S>;
    }) & {
  className?: string;
};

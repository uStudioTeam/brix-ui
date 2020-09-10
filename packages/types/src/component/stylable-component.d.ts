import type { StyledComponent } from 'styled-components';

export type StylableComponent<S extends Record<string, StyledComponent<any, any>> = undefined> = (S extends undefined // eslint-disable-next-line @typescript-eslint/ban-types
  ? {}
  : {
      styled?: Partial<S>;
    }) & {
  className?: string;
};

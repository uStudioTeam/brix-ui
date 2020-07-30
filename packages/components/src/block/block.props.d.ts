import type { Indent, IntrinsicComponent } from '@ustudio-ui/types/component';

export interface BlockProps extends IntrinsicComponent<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;

  isInline?: boolean;

  margin?: Indent;
  padding?: Indent;
  gap?: string;
}

import { TypeVariant } from '@ustudio-ui/types/typography';
import { Values } from '@ustudio-ui/utils/types';

export type TextTag = Extract<
  keyof JSX.IntrinsicElements,
  'code' | 'em' | Values<typeof TypeVariant> | 'h6' | 'mark' | 'pre' | 'span' | 'strong' | 'sub' | 'sup'
>;

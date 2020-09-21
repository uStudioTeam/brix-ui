import { TypeVariant } from '@brix-ui/types/typography';
import { Values } from '@brix-ui/utils/types';

export type TextTag = Extract<
  keyof JSX.IntrinsicElements,
  'code' | 'em' | Values<typeof TypeVariant> | 'h6' | 'mark' | 'pre' | 'span' | 'strong' | 'sub' | 'sup'
>;

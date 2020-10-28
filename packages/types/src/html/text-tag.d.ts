import { TypeVariant as _TypeVariant } from '../typography';

type TypeVariant = typeof _TypeVariant;

export type TextTag = Extract<
  keyof JSX.IntrinsicElements,
  'code' | 'em' | TypeVariant[keyof TypeVariant] | 'h6' | 'mark' | 'pre' | 'span' | 'strong' | 'sub' | 'sup' | 'label'
>;

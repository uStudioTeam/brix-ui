import type { Ref, TextareaHTMLAttributes } from 'react';

import type { FormComponent, IntrinsicComponent } from '@brix-ui/types/component';

export interface TextAreaProps
  extends FormComponent<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>['value']>,
    IntrinsicComponent<TextareaHTMLAttributes<HTMLTextAreaElement>> {
  resize?: 'both' | 'horizontal' | 'vertical';

  showSymbolsLeft?: boolean;

  containerRef?: Ref<HTMLLabelElement>;
}

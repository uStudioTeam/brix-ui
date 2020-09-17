import type { Ref, InputHTMLAttributes } from 'react';

import type { Affixable, FormComponent, IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';

import { Container, Input } from './input.styles';

interface Styled {
  Container: typeof Container;
  Input: typeof Input;
}

export interface InputProps<V extends string | number>
  extends Affixable,
    FormComponent<HTMLInputElement, V>,
    IntrinsicComponent<InputHTMLAttributes<HTMLInputElement>>,
    StylableComponent<Styled> {
  type: HTMLInputElement['type'] | undefined;

  containerRef?: Ref<HTMLLabelElement>;
}

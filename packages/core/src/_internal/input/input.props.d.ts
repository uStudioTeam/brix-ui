import type { FormComponent, StylableComponent } from '@ustudio-ui/types/component';

export interface InputProps<V extends string | number> extends FormComponent<HTMLInputElement, V>, StylableComponent {
  type: HTMLInputElement['type'];
}

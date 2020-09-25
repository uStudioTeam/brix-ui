import type { ReactNode } from 'react';

import type { StylableComponent } from '@brix-ui/types/component';

import type { CheckboxProps } from '../checkbox';

export interface SwitchProps extends StylableComponent, Omit<CheckboxProps, 'color'> {
  children?: ReactNode | ((props: Pick<SwitchProps, 'value' | 'isDisabled' | 'isInvalid'>) => ReactNode);
}

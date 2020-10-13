import type { ReactNode } from 'react';

import type { CheckboxProps } from '../checkbox';

export interface SwitchProps extends CheckboxProps {
  children?: ReactNode | ((props: Pick<SwitchProps, 'value' | 'isDisabled' | 'isInvalid'>) => ReactNode);
}

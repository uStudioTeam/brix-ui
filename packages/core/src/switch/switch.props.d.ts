import { StylableComponent } from '@brix-ui/types/component';
import type { ReactNode } from 'react';

import type { CheckboxProps } from '../checkbox';

export interface SwitchProps
  extends StylableComponent<
      [
        'trackHeight',
        'trackWidth',
        'thumbSize',
        'thumbScale',
        'verticalPadding',
        'horizontalPadding',
        'borderWidth',
        'thumbIndent'
      ]
    >,
    CheckboxProps {
  children?: ReactNode | ((props: Pick<SwitchProps, 'value' | 'isDisabled' | 'isInvalid'>) => ReactNode);
}

import { ReactNode } from 'react';

import { FontVariant, TypeVariant } from '@ustudio-ui/types/typography';
import { IntrinsicComponent } from '@ustudio-ui/types/component';
import { Values } from '@ustudio-ui/utils/types';

export interface TextProps extends IntrinsicComponent {
  children?: ReactNode;

  as?: Values<typeof TypeVariant> | 'span' | 'mark' | 'pre';
  variant?: Values<typeof TypeVariant>;
  appearance?: Values<typeof FontVariant>;

  color?: string;
  align?: 'left' | 'center' | 'right';

  textDecoration?: 'underline' | 'italic' | 'line-through';
}

import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { Affixable, FormComponent, IntrinsicComponent, StylableComponent } from '@brix-ui/types/component';
import { Values } from '@brix-ui/utils/types';

import { TimeMode } from './entity';
import { TimePicker, InputsContainer, ModeSwitch, Mode, Divider } from './time-picker.styles';

interface Styled {
  TimePicker: typeof TimePicker;
  InputsContainer: typeof InputsContainer;
  ModeSwitch: typeof ModeSwitch;
  Mode: typeof Mode;
  Divider: typeof Divider;
}

export interface TimePickerProps
  extends Omit<FormComponent<HTMLSelectElement | HTMLInputElement, string>, 'onChange'>,
    Pick<Affixable, 'prefix'>,
    PropsWithChildren<IntrinsicComponent<HTMLAttributes<HTMLDivElement>>>,
    StylableComponent<Styled> {
  /**
   * undefined – 24-hour time
   * 'am' | 'pm' – 12-hour time
   */
  mode?: Values<typeof TimeMode> | undefined;

  /**
   * No event here because we have two to three different inputs
   */
  onChange?(value: string): void;

  onModeChange?(mode: TimePickerProps['mode']): void;
}

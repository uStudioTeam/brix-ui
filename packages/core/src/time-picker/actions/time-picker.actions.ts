import type { Values } from '@brix-ui/utils/types';

import { Granularity, Time } from '../entity';

export type TimePickerAction = SetTimeAction;

export class SetTimeAction {
  public readonly type = 'set_time';

  public constructor(
    public readonly payload: {
      name: Values<typeof Granularity>;
      value: Time;
    }
  ) {}
}

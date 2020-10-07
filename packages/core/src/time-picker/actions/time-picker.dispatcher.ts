import type { Dispatch } from 'react';

import { SetTimeAction, TimePickerAction } from './time-picker.actions';

export class TimePickerDispatcher {
  public constructor(private readonly dispatch: Dispatch<TimePickerAction>) {}

  public setTime(payload: SetTimeAction['payload']): void {
    this.dispatch(new SetTimeAction(payload));
  }

  public clearTime(name: SetTimeAction['payload']['name']): void {
    this.dispatch(
      new SetTimeAction({
        name,
        value: undefined,
      })
    );
  }
}

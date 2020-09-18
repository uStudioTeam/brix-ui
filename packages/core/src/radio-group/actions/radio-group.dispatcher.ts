import type { Dispatch } from 'react';

import {
  AddOptionAction,
  RemoveOptionAction,
  SetDisabledAction,
  SetInvalidAction,
  SetRequiredAction,
} from './radio-group.actions';
import type { RadioGroupAction } from './radio-group.actions';

export class RadioGroupDispatcher {
  public constructor(private readonly dispatch: Dispatch<RadioGroupAction>) {}

  public addOption(value: AddOptionAction['payload']['value']): void {
    this.dispatch(new AddOptionAction({ value }));
  }

  public removeOption(value: RemoveOptionAction['payload']['value']): void {
    this.dispatch(new RemoveOptionAction({ value }));
  }

  public setDisabled(isDisabled: SetDisabledAction['payload']['isDisabled']): void {
    this.dispatch(new SetDisabledAction({ isDisabled }));
  }

  public setRequired(isRequired: SetRequiredAction['payload']['isRequired']): void {
    this.dispatch(new SetRequiredAction({ isRequired }));
  }

  public setInvalid(isInvalid: SetInvalidAction['payload']['isInvalid']): void {
    this.dispatch(new SetInvalidAction({ isInvalid }));
  }
}

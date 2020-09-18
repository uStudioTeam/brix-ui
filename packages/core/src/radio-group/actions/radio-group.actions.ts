export type RadioGroupAction =
  | SetValueAction
  | AddOptionAction
  | RemoveOptionAction
  | SetDisabledAction
  | SetRequiredAction
  | SetInvalidAction;

export class SetValueAction {
  public readonly type = 'set_value';

  public constructor(
    public readonly payload: {
      value: string;
    }
  ) {}
}

export class AddOptionAction {
  public readonly type = 'add_option';

  public constructor(
    public readonly payload: {
      value: string;
    }
  ) {}
}

export class RemoveOptionAction {
  public readonly type = 'remove_option';

  public constructor(
    public readonly payload: {
      value: string;
    }
  ) {}
}

export class SetDisabledAction {
  public readonly type = 'set_disabled';

  public constructor(
    public readonly payload: {
      isDisabled: boolean;
    }
  ) {}
}

export class SetRequiredAction {
  public readonly type = 'set_required';

  public constructor(
    public readonly payload: {
      isRequired: boolean;
    }
  ) {}
}

export class SetInvalidAction {
  public readonly type = 'set_invalid';

  public constructor(
    public readonly payload: {
      isInvalid: boolean;
    }
  ) {}
}

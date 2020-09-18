export interface RadioGroupState {
  value: string;
  options: Set<string>;

  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
}

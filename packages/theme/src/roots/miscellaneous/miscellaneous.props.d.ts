export interface MiscellaneousProps {
  readonly color: string;
  readonly backgroundColor: string;

  readonly transition: {
    readonly short: number;
    readonly long: number;
  };

  readonly inputHeightLarge: string;
  readonly inputHeightSmall: string;

  readonly inputBorderRadius: string;

  readonly inputBorderColor: string;
  readonly inputBorderColorFocus: string;
  readonly inputBorderColorInvalid: string;
  readonly inputBorderColorInvalidFocus: string;
  readonly inputBorderColorValid: string;
  readonly inputBorderColorValidFocus: string;
  readonly inputBorderColorDisabled: string;

  readonly inputBackgroundColor: string;
  readonly inputBackgroundColorDisabled: string;
  readonly inputBackgroundColorChecked: string;
  readonly inputBackgroundColorCheckedFocus: string;
  readonly inputBackgroundColorCheckedDisabled: string;

  readonly inputColor: string;
  readonly inputColorDisabled: string;

  readonly inputPlaceholderColor: string;
  readonly inputPlaceholderColorDisabled: string;
}

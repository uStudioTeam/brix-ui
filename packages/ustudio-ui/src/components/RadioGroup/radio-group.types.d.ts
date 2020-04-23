import { Input } from '../../shared/types';
import { ClassNames, Direction } from '../../theme/theme';

interface Styled {
  RadioGroup;
  RadioGroupItem;
  Label;
  RadioButton;
  Input;
}

interface RadioGroupProps extends Input<Option>, ClassNames<Styled> {
  name: string;
  options: Record<OptionValue, Option>;
  direction?: Direction;
}

type OptionValue = string | number;

interface Option {
  value: OptionValue;
  label?: string;
  isDisabled?: boolean;
}

declare const RadioGroup: {
  (props: RadioGroupProps): JSX.Element;
};

export default RadioGroup;

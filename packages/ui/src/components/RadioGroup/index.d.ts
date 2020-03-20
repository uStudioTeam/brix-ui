import { Input } from '../../input';
import { ClassNames, Direction } from '../../theme/theme';

interface Styled {
  RadioGroup;
  RadioGroupItem;
  Label;
  RadioButton;
  Input;
}

interface RadioGroupProps extends Input<Option>, ClassNames<Styled> {
  options: Option[];
  disabledOptions?: Option[];
  direction: Direction;
}

type Option = string | number;

declare const RadioGroup: {
  (props: RadioGroupProps): JSX.Element;
};

export default RadioGroup;

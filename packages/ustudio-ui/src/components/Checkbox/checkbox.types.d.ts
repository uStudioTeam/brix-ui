import { Input } from '../../shared/types';
import { ClassNames } from '../../theme/theme';

interface Styled {
  Container,
  Input,
  Checkbox
}

type CheckboxProps = Input<boolean> & ClassNames<Styled>;

declare const Checkbox: {
  (props: CheckboxProps): JSX.Element;
};

export default Checkbox;

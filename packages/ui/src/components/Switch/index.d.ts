import { Input } from '../../input';
import { ClassNames } from '../../theme/theme';

interface Styled {
  Switch, Input, Container
}

interface SwitchProps extends Input<boolean>, ClassNames<Styled> {
  alternative?: true;
}

declare const Switch: {
  (props: SwitchProps): JSX.Element;
};

export default Switch;

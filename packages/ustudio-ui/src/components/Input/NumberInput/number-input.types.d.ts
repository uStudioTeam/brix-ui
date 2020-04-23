import { Input } from '../../../shared/types';
import { ClassNames } from '../../../theme/theme';
import { InputProps, Styled } from '../input.types';

type NumberInputProps = Input<number> & ClassNames<Styled> & InputProps;

declare const NumberInput: {
  (props: NumberInputProps): JSX.Element;
};

export default NumberInput;

import { Input } from '../../../input';
import { ClassNames } from '../../../theme/theme';
import { InputProps, Styled } from '../types';

type NumberInputProps = Input<number> & ClassNames<Styled> & InputProps;

declare const NumberInput: {
  (props: NumberInputProps): JSX.Element;
};

export default NumberInput;

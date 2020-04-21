import { Input } from '../../../shared/types';
import { ClassNames } from '../../../theme/theme';
import { InputProps, Styled } from '../types';

type TextInputProps = Input<string> & ClassNames<Styled> & InputProps;

declare const TextInput: {
  (props: TextInputProps): JSX.Element;
};

export default TextInput;

import { Input } from '../../../shared/types';
import { ClassNames } from '../../../theme/theme';
import { InputProps, Styled } from '../input.types';

type TextAreaInputProps = Partial<HTMLTextAreaElement> &
  Input<string> &
  ClassNames<Omit<Styled, 'Prefix' | 'Suffix'>> &
  InputProps;

declare const TextArea: {
  (props: TextAreaInputProps): JSX.Element;
};

export default TextArea;

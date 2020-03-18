import { ClassNames } from '../../theme/theme';
import { TextProps } from '../Text';

interface Styled {
  Container;
  Text;
  Textarea;
}

type EditableTextProps = Omit<TextProps, 'align'> &
  ClassNames<Styled> & {
    isDefaultEditable?: boolean;
    onChange: (value: string) => void;
  };

declare const EditableText: {
  (props: EditableTextProps): JSX.Element;
};

export default EditableText;

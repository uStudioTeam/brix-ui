import { ClassNames } from '../../theme/theme';
import { TextProps } from '../Text';

interface Styled {
  Container;
  Text;
  Textarea;
}

type EditableTextProps = TextProps &
  ClassNames<Styled> & {
  defaultEditing?: boolean;
  onChange: (value: string) => void;
};

declare const EditableText: {
  (props: EditableTextProps): JSX.Element;
};

export default EditableText;

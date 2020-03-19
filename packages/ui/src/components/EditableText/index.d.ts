import { ReactNode } from 'react';
import { ClassNames } from '../../theme/theme';
import { Input } from '../../input';
import { TextProps } from '../Text';

interface Styled {
  Container;
  Text;
  Textarea;
}

type EditableTextProps = Omit<TextProps, 'align' | 'onChange'> &
  ClassNames<Styled> &
  Input<string> & {
    isDefaultEditable?: boolean;
    icon?: ReactNode;
  };

declare const EditableText: {
  (props: EditableTextProps): JSX.Element;
};

export default EditableText;

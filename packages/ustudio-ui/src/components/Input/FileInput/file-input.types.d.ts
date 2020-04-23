import { Input } from '../../../shared/types';
import { ClassNames } from '../../../theme/theme';
import { InputProps } from '../input.types';

interface StyledFileInput {
  FileInput;
  FileInputButton;
  FileInputContainer;
  FileInputWrapper;
  Prefix;
  Suffix;
}

interface FileInputProps extends Input<FileList>, ClassNames<StyledFileInput>, InputProps {
  buttonValue?: string;
  defaultValue?: never;
  multiple?: boolean;
}

declare const FileInput: {
  (props: FileInputProps): JSX.Element;
};

export default FileInput;

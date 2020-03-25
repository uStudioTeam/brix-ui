import { ClassNames } from '../../theme/theme';
import { TextProps } from '../Text';

interface Styled {
  Placeholder;
}

interface BlockPlaceholderProps {
  variant?: 'block';

  appearance?: BlockAppearance;
}

interface TextPlaceholderProps {
  variant: 'text';

  appearance?: TextAppearance;
}

interface BlockAppearance {
  width?: string;
  height?: string;
  borderRadius?: string;
}

interface TextAppearance {
  height?: TextVariant;
  width?: string;
}

type TextVariant = TextProps['variant'];

declare const Placeholder: {
  (props: (BlockPlaceholderProps | TextPlaceholderProps) & ClassNames<Styled>): JSX.Element;
};

export default Placeholder;

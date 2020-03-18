import { ReactNode } from 'react';
import { ClassNames } from '../../theme/theme';

interface Styled {
  Meta;
  Title;
  Link;
}

interface MetaProps extends ClassNames<Styled> {
  variant?: 'small' | 'large';

  title?: ReactNode;
  value: ReactNode;
}

declare const Meta: {
  (props: MetaProps): JSX.Element;
};

export default Meta;

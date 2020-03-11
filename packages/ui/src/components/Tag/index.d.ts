import { ClassNames } from '../../theme/theme';

interface Styled {
  Tag;
}

interface TagAppearance {
  background?: string;
  color?: string;
}

export interface TagProps extends ClassNames<Styled> {
  children: string;
  appearance?: TagAppearance;
}

declare const Tag: {
  (props: TagProps): JSX.Element;
};

export default Tag;

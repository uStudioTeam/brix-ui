import { ClassNames } from '../../theme/theme';

interface Styled {
  Badge;
  Content;
}

interface BadgeProps extends ClassNames<Styled> {
  children: string | number;
  isDisabled?: boolean;
  
  appearance?: BadgeAppearance;
}

interface BadgeAppearance {
  background?: string;
  color?: string;
}

declare const Badge: {
  (props: BadgeProps): JSX.Element;
};

export default Badge;

import { ClassNames } from '../../theme/theme';

interface Styled {
  Avatar
}

interface AvatarProps extends ClassNames<Styled> {
  children: string;
  
  appearance?: AvatarAppearance;
  
  isDisabled?: boolean;
}

interface AvatarAppearance {
  background?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

declare const Avatar: {
  (props: AvatarProps): JSX.Element;
};

export default Avatar;

import { ClassNames } from '../../theme/theme';

interface Styled {
  Spinner
}

interface SpinnerProps extends ClassNames<Styled> {
  appearance?: SpinnerAppearance;
  delay?: number;
}

interface SpinnerAppearance {
  color?: string;
  size?: number;
}

declare const Spinner: {
  (props: SpinnerProps): JSX.Element;
};

export default Spinner;

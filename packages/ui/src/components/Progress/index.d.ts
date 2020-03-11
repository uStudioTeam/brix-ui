import { ClassNames } from '../../theme/theme';

interface Styled {
  Progress
}

interface ProgressProps extends ClassNames<Styled> {
  max: number;
  value: number;
}

declare const Progress: {
  (props: ProgressProps): JSX.Element;
};

export default Progress;

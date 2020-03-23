import { Input } from '../../input';
import { ClassNames } from '../../theme/theme';

interface Styled {
  SliderContainer;
  HelperContainer;
  Helper;
  InputContainer;
  Input;
  Line;
  Value;
  Step;
  StepContainer;
}

interface SliderProps extends Input<number>, ClassNames<Styled> {
  step?: number;
  stepLabels?: StepLabels;

  displayValue?: boolean;
  displaySteps?: boolean;

  min?: number;
  max?: number;
}

interface StepLabels {
  [value: number]:
    | {
        label: string;
        isDisplayed?: boolean;
      }
    | {
        label?: string;
        isDisplayed: boolean;
      };
}

declare const Slider: {
  (props: SliderProps): JSX.Element;
};

export default Slider;

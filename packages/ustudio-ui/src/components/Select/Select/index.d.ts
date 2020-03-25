import { ClassNames } from '../../../theme/theme';
import { Group, Item, SelectProps, StyledSelect } from '../types';

interface SingleGroupSelect extends SelectProps<string>, ClassNames<StyledSelect> {
  items?: never;
  groups: Group[];
}

interface SingleValueSelect extends SelectProps<string>, ClassNames<StyledSelect> {
  items: Record<string, Item>;
  groups?: never;
}

type SingleSelectProps = SingleGroupSelect | SingleValueSelect;

declare const Select: {
  (props: SingleSelectProps): JSX.Element;
};

export default Select;

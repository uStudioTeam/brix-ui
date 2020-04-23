import { ClassNames } from '../../../theme/theme';
import { Group, Item, SelectProps, StyledMultiSelect } from '../select.types';

interface MultiGroupSelect extends SelectProps<string[]>, ClassNames<StyledMultiSelect> {
  items?: never;
  groups: Group[];
}

interface MultiValueSelect extends SelectProps<string[]>, ClassNames<StyledMultiSelect> {
  items: Record<string, Item>;
  groups?: never;
}

type MultiSelectProps = MultiGroupSelect | MultiValueSelect;

declare const MultiSelect: {
  (props: MultiSelectProps): JSX.Element;
};

export default MultiSelect;

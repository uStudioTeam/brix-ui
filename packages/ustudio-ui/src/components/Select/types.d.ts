import { Input } from '../../input';

interface SelectProps<Value> extends Input<Value> {
  placeholder?: string;
}

interface StyledSelect {
  SelectContainer;
  Overlay;
  Label;
  Select;
  SelectIcon;
  Dropdown;
  ValuesList;
  ValuesListTitle;
  ValuesListItem;
  ValuesListIcon;
}

interface StyledMultiSelect extends StyledSelect {
  SelectedList;
  SelectedListItem;
  SelectedListLabel;
  SelectedListIcon;
}

interface Item {
  value: string;
  label: string;

  isDisabled?: boolean;
  isDefault?: boolean;
}

interface Group {
  title: string;
  items: Record<string, Item>;
}

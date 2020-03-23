import { Input } from '../../input';

type SelectProps<Value> = Input<Value>;

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

// Imports here exist because ambient modules must know exactly what they export by relative path
import Alert from './components/Alert';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Drawer from './components/Drawer';
import Dropdown from './components/Dropdown';
import EditableText from './components/EditableText';
import Flex from './components/Flex';
import Grid from './components/Grid/Grid';
import Cell from './components/Grid/Cell';
import FileInput from './components/Input/FileInput';
import NumberInput from './components/Input/NumberInput';
import TextArea from './components/Input/TextArea';
import TextInput from './components/Input/TextInput';
import Meta from './components/Meta';
import Modal from './components/Modal';
import Placeholder from './components/Placeholder';
import Progress from './components/Progress';
import RadioGroup from './components/RadioGroup';
import MultiSelect from './components/Select/MultiSelect';
import Select from './components/Select/Select';
import Slider from './components/Slider';
import Spinner from './components/Spinner';
import Switch from './components/Switch';
import Tabs from './components/Tabs';
import Tag from './components/Tag';
import Text from './components/Text';
import Tooltip from './components/Tooltip';

import { ThemeProvider, Mixin } from './theme';
import { useDropdown, useKeyPressClose } from './hooks';

declare module 'ustudio-ui' {
  export { default as Alert } from './components/Alert';
  export { default as Avatar } from './components/Avatar';
  export { default as Badge } from './components/Badge';
  export { default as Button } from './components/Button';
  export { default as Checkbox } from './components/Checkbox';
  export { default as Drawer } from './components/Drawer';
  export { default as Dropdown } from './components/Dropdown';
  export { default as EditableText } from './components/EditableText';
  export { default as Flex } from './components/Flex';
  export { default as Grid } from './components/Grid/Grid';
  export { default as Cell } from './components/Grid/Cell';
  export { default as FileInput } from './components/Input/FileInput';
  export { default as NumberInput } from './components/Input/NumberInput';
  export { default as TextArea } from './components/Input/TextArea';
  export { default as TextInput } from './components/Input/TextInput';
  export { default as Meta } from './components/Meta';
  export { default as Modal } from './components/Modal';
  export { default as Placeholder } from './components/Placeholder';
  export { default as Progress } from './components/Progress';
  export { default as RadioGroup } from './components/RadioGroup';
  export { default as MultiSelect } from './components/Select/MultiSelect';
  export { default as Select } from './components/Select/Select';
  export { default as Slider } from './components/Slider';
  export { default as Spinner } from './components/Spinner';
  export { default as Switch } from './components/Switch';
  export { default as Tabs } from './components/Tabs';
  export { default as Tag } from './components/Tag';
  export { default as Text } from './components/Text';
  export { default as Tooltip } from './components/Tooltip';
}

declare module 'ustudio-ui/components/Alert' {
  export default Alert;
}

declare module 'ustudio-ui/components/Avatar' {
  export default Avatar;
}

declare module 'ustudio-ui/components/Badge' {
  export default Badge;
}

declare module 'ustudio-ui/components/Button' {
  export default Button;
}

declare module 'ustudio-ui/components/Checkbox' {
  export default Checkbox;
}

declare module 'ustudio-ui/components/Drawer' {
  export default Drawer;
}

declare module 'ustudio-ui/components/Dropdown' {
  export default Dropdown;
}

declare module 'ustudio-ui/components/EditableText' {
  export default EditableText;
}

declare module 'ustudio-ui/components/Flex' {
  export default Flex;
}

declare module 'ustudio-ui/components/Grid/Grid' {
  export default Grid;
}

declare module 'ustudio-ui/components/Grid/Cell' {
  export default Cell;
}

declare module 'ustudio-ui/components/Input/FileInput' {
  export default FileInput;
}

declare module 'ustudio-ui/components/Input/NumberInput' {
  export default NumberInput;
}

declare module 'ustudio-ui/components/Input/TextArea' {
  export default TextArea;
}

declare module 'ustudio-ui/components/Input/TextInput' {
  export default TextInput;
}

declare module 'ustudio-ui/components/Meta' {
  export default Meta;
}

declare module 'ustudio-ui/components/Modal' {
  export default Modal;
}

declare module 'ustudio-ui/components/Placeholder' {
  export default Placeholder;
}

declare module 'ustudio-ui/components/Progress' {
  export default Progress;
}

declare module 'ustudio-ui/components/RadioGroup' {
  export default RadioGroup;
}

declare module 'ustudio-ui/components/Select/Select' {
  export default Select;
}

declare module 'ustudio-ui/components/Select/MultiSelect' {
  export default MultiSelect;
}

declare module 'ustudio-ui/components/Slider' {
  export default Slider;
}

declare module 'ustudio-ui/components/Spinner' {
  export default Spinner;
}

declare module 'ustudio-ui/components/Switch' {
  export default Switch;
}

declare module 'ustudio-ui/components/Tabs' {
  export default Tabs;
}

declare module 'ustudio-ui/components/Tag' {
  export default Tag;
}

declare module 'ustudio-ui/components/Text' {
  export default Text;
}

declare module 'ustudio-ui/components/Tooltip' {
  export default Tooltip;
}

declare module 'ustudio-ui/theme' {
  export { ThemeProvider, Mixin } from './theme';
}

declare module 'ustudio-ui/hooks' {
  export { useDropdown, useKeyPressClose } from './hooks';
}

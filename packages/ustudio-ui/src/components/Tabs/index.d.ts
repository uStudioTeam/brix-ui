import { ReactNode } from 'react';
import { ClassNames } from '../../theme/theme';

interface Styled {
  Tabs, TabContainer, Tab, TabContent
}

interface TabsProps extends ClassNames<Styled> {
  tabs: Tab[];
  active: TabValue;
  onChange: (tab: TabValue) => void;
  
  disabledTabs?: TabValue[];
}

interface Tab {
  value: string;
  children: ReactNode | ReactNode[];
}

type TabValue = Tab['value'];

declare const Tabs: {
  (props: TabsProps): JSX.Element;
};

export default Tabs;

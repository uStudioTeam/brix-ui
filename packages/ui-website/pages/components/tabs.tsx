import React from 'react';

import { Tabs } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const TabsPage = () => {
  const tabs = [
    { value: 'one', children: 'One' },
    { value: 'two', children: 'Two' },
    { value: 'three', children: 'Three' },
    { value: 'four', children: 'Four' },
    { value: 'five', children: 'Five' },
  ];

  const [activeTab, setActiveTab] = React.useState(tabs[0].value);

  return (
    <ComponentInfo
      name="Tabs"
      description="Tabs make it easy to explore and switch between different views."
      props={{
        tabs: {
          type: `\`
{
  value: string;
  children: ReactNode | ReactNode[];
}[]\``,
          required: true,
        },
        active: {
          type: '`string`',
          required: true,
        },
        onChange: {
          type: '`(value: string) => void`',
          required: true,
        },
        disabledTabs: {
          type: '`string[]`',
        },
        variant: {
          type: `\`'span' | 'code' | 'small' | 'body' | 'article' | 'caption' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'\``,
          description: 'Text element to be displayed in each tab',
          defaultValue: `\`'h3'\``,
        },
      }}
      classNames={['Tabs', 'TabContainer', 'Tab', 'TabContent']}
    >
      <ComponentInfoItem>
        <Tabs
          tabs={tabs}
          active={activeTab}
          onChange={(tab: React.SetStateAction<string>) => setActiveTab(tab)}
          disabledTabs={[tabs[3].value]}
        />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default TabsPage;

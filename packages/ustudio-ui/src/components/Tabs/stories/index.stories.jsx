import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';
import styled from 'styled-components';

import Tabs from '../index';

addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const tabsStory = storiesOf('Tabs', module);

const SContainer = styled.div`
  margin: 0.5rem;
`;

tabsStory.add('Primary', () => {
  const tabs = [
    { value: 'One', children: 'One' },
    { value: 'Two', children: 'Two' },
    { value: 'Three', children: 'Three' },
    { value: 'Four', children: 'Four' },
    { value: 'Five', children: 'Five' },
  ];

  const [active, setActive] = useState(tabs[0].value);

  return (
    <SContainer>
      <Tabs
        tabs={tabs}
        active={active}
        disabledTabs={[tabs[1].value, tabs[4].value]}
        onChange={tab => setActive(tab)}
        variant={select(
          'Tab text variant',
          ['small', 'body', 'article', 'caption', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
          'h3'
        )}
      />
    </SContainer>
  );
});

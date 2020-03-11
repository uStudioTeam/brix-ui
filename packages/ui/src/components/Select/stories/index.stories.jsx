import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';
import styled from 'styled-components';

import Select from '../Select';
import MultiSelect from '../MultiSelect';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const singleSelectStory = storiesOf('Single select', module);

const items = {
  1: { value: 1, label: 'Item 1' },
  2: { value: 2, label: 'Item 2' },
  3: { value: 3, label: 'Item 3' },
  4: { value: 4, label: 'Item 4', isDisabled: true },
  5: { value: 5, label: 'Item 5' },
  6: { value: 6, label: 'Item 6', isDefault: true },
  7: { value: 7, label: 'Item 7' },
  8: { value: 8, label: 'Item 8' },
  9: { value: 9, label: 'Item 9' },
};

const groups = [{ title: 'Group 1', items }];

const SContainer = styled.div`
  margin: 1rem;
`;

singleSelectStory.add('Flat', () => {
  const [selected, setSelected] = useState(items[2].value);

  return (
    <SContainer>
      <Select
        items={items}
        value={selected}
        label="Default select"
        onChange={item => setSelected(item)}
        isDisabled={boolean('Disabled', false)}
      />
    </SContainer>
  );
});

singleSelectStory.add('Groups', () => {
  const [selected, setSelected] = useState(groups[0].items[2].value);

  return (
    <SContainer>
      <Select
        groups={groups}
        value={selected}
        label="Default select"
        onChange={item => setSelected(item)}
        isDisabled={boolean('Disabled', false)}
      />
    </SContainer>
  );
});

const multiSelectStory = storiesOf('Multi select', module);

multiSelectStory.add('Flat', () => {
  const [selected, setSelected] = useState([items[1].value, items[3].value, items[5].value]);

  return (
    <SContainer>
      <MultiSelect
        items={items}
        value={selected}
        label="Default select"
        onChange={items => setSelected(items)}
        isDisabled={boolean('Disabled', false)}
      />
    </SContainer>
  );
});

multiSelectStory.add('Groups', () => {
  const [selected, setSelected] = useState([groups[0].items[2].value]);

  return (
    <SContainer>
      <MultiSelect
        groups={groups}
        value={selected}
        label="Default select"
        onChange={items => setSelected(items)}
        isDisabled={boolean('Disabled', false)}
      />
    </SContainer>
  );
});

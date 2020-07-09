import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';
import styled from 'styled-components';

import Select from './Select';
import MultiSelect from './MultiSelect';

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

const groups = [
  {
    title: 'Group 1',
    items: { 1: { value: 1, label: 'Item 1' }, 2: { value: 2, label: 'Item 2' }, 3: { value: 3, label: 'Item 3' } },
  },
  {
    title: 'Group 2',
    items: {
      4: { value: 4, label: 'Item 4', isDisabled: true },
      5: { value: 5, label: 'Item 5' },
      6: { value: 6, label: 'Item 6', isDefault: true },
      7: { value: 7, label: 'Item 7' },
      8: { value: 8, label: 'Item 8' },
      9: { value: 9, label: 'Item 9' },
    },
  },
];

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
        name="default-select"
        onChange={(item) => setSelected(item)}
        placeholder={text('Placeholder', '')}
        isDisabled={boolean('Disabled', false)}
        isDefaultOpen={boolean('Open by default', true)}
      />
    </SContainer>
  );
});

singleSelectStory.add('Flat Autocomplete', () => {
  const [selected, setSelected] = useState(items[2].value);

  return (
    <SContainer>
      <Select
        autocomplete
        items={items}
        value={selected}
        name="default-select"
        onChange={(item) => setSelected(item)}
        placeholder={text('Placeholder', 'Autocomplete')}
        isDisabled={boolean('Disabled', false)}
        isDefaultOpen={boolean('Open by default', false)}
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
        name="default-select"
        onChange={(item) => setSelected(item)}
        placeholder={text('Placeholder', '')}
        isDisabled={boolean('Disabled', false)}
        isDefaultOpen={boolean('Open by default', false)}
      />
    </SContainer>
  );
});

singleSelectStory.add('Groups Autocomplete', () => {
  const [selected, setSelected] = useState(groups[0].items[2].value);

  return (
    <SContainer>
      <Select
        autocomplete
        groups={groups}
        value={selected}
        name="default-select"
        onChange={(item) => setSelected(item)}
        placeholder={text('Placeholder', 'Autocomplete')}
        isDisabled={boolean('Disabled', false)}
        isDefaultOpen={boolean('Open by default', false)}
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
        name="default-select"
        onChange={(items) => setSelected(items)}
        placeholder={text('Placeholder', '')}
        isDisabled={boolean('Disabled', false)}
        isDefaultOpen={boolean('Open by default', true)}
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
        name="default-select"
        onChange={(items) => setSelected(items)}
        placeholder={text('Placeholder', '')}
        isDisabled={boolean('Disabled', false)}
        isDefaultOpen={boolean('Open by default', false)}
      />
    </SContainer>
  );
});

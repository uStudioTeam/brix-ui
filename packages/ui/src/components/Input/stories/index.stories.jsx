import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';
import styled from 'styled-components';

import FileInput from '../FileInput';
import NumberInput from '../NumberInput';
import TextArea from '../TextArea';
import TextInput from '../TextInput';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const inputStory = storiesOf('Input', module);

const SContainer = styled.div`
  width: fit-content;
  margin: 1rem;
`;

inputStory.add('Text', () => {
  const [textValue, setTextValue] = useState('');

  return (
    <SContainer>
      <TextInput
        label="Text"
        value={textValue}
        onChange={value => setTextValue(value)}
        placeholder={text('Placeholder', 'Placeholder')}
        isDisabled={boolean('Disabled', false)}
        prefix={text('Prefix', undefined)}
        suffix={text('Suffix', undefined)}
      />
    </SContainer>
  );
});

inputStory.add('Number', () => {
  const [numberValue, setNumber] = useState();

  return (
    <SContainer>
      <NumberInput
        label="Number"
        value={numberValue}
        onChange={value => setNumber(value)}
        placeholder={text('Placeholder', 'Placeholder')}
        isDisabled={boolean('Disabled', false)}
        prefix={text('Prefix', undefined)}
        suffix={text('Suffix', undefined)}
      />
    </SContainer>
  );
});

inputStory.add('TextArea', () => {
  const [textValue, setValue] = useState('');

  return (
    <SContainer>
      <TextArea
        label="Text area"
        value={textValue}
        onChange={value => setValue(value)}
        placeholder={text('Placeholder', 'Placeholder')}
        isDisabled={boolean('Disabled', false)}
      />
    </SContainer>
  );
});

inputStory.add('File', () => {
  const [fileValue, setValue] = useState();

  return (
    <SContainer>
      <FileInput
        label="File"
        buttonValue={text('Button value', 'Upload')}
        value={fileValue}
        onChange={value => setValue(value)}
        multiple={boolean('Multiple', false)}
        isDisabled={boolean('Disabled', false)}
        prefix={text('Prefix', undefined)}
        suffix={text('Suffix', undefined)}
      />
    </SContainer>
  );
});

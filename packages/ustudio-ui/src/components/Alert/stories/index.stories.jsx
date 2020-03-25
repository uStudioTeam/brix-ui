import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../Button';
import Alert from '../index';

const alertStory = storiesOf('Alert', module);

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const SContainer = styled.div`
  margin: 1rem;
`;

alertStory.add('Primary', () => {
  const [isOpen, setOpen] = useState(true);
  const intent = select('Intent', ['primary', 'positive', 'negative'], 'primary');

  return (
    <SContainer>
      <Button onClick={() => setOpen(true)} intent={intent}>
        Open alert
      </Button>

      <Alert
        intent={intent}
        verticalPosition={select('Vertical position', ['top', 'bottom'], 'bottom')}
        horizontalPosition={select('Horizontal position', ['left', 'center', 'right'], 'center')}
        isOpen={isOpen}
        onChange={() => setOpen(false)}
      >
        Alert message (click to close)
      </Alert>
    </SContainer>
  );
});

import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';

import Button from '../../Button';

import Modal from '../index';

addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const modalStory = storiesOf('Modal', module);

modalStory.add('Primary', () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal title="Modal title" isOpen={isOpen} onChange={setOpen}>
        Modal content
      </Modal>
    </>
  );
});

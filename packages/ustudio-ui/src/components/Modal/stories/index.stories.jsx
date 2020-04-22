import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';

import Button from '../../Button';

import Modal from '../index';
import Flex from '../../Flex';
import Text from '../../Text';

addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const modalStory = storiesOf('Modal', module);

modalStory.add('Primary', () => {
  const [isSmOpen, setSmOpen] = useState(false);
  const [isMdOpen, setMdOpen] = useState(false);
  const [isLgOpen, setLgOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setSmOpen(true)}>Open small modal</Button>

      <Modal title="Modal title" isOpen={isSmOpen} onChange={setSmOpen}>
        Modal small content
      </Modal>

      <Button onClick={() => setMdOpen(true)}>Open modal</Button>

      <Modal isOpen={isMdOpen} onChange={setMdOpen}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero neque nisi odit
        qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias repudiandae similique.
      </Modal>

      <Button onClick={() => setLgOpen(true)}>Open modal</Button>

      <Modal
        title={
          <Flex alignment={{ horizontal: 'center', vertical: 'start' }}>
            <Text variant="h4" appearance="underlined" color="var(--c-positive)">Custom modal title</Text>
          </Flex>
        }
        isOpen={isLgOpen}
        onChange={setLgOpen}
        footer={
          <Flex alignment={{ horizontal: 'end' }}>
            <Button appearance="outlined" intent="positive">
              Approve
            </Button>
          </Flex>
        }
      >
        <Flex>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero neque nisi odit
          qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias repudiandae
          similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero
          neque nisi odit qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias
          repudiandae similique.
        </Flex>

        <Flex>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero neque nisi odit
          qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias repudiandae
          similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero
          neque nisi odit qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias
          repudiandae similique.
        </Flex>

        <Flex>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero neque nisi odit
          qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias repudiandae
          similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero
          neque nisi odit qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias
          repudiandae similique.
        </Flex>

        <Flex>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero neque nisi odit
          qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias repudiandae
          similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero
          neque nisi odit qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias
          repudiandae similique.
        </Flex>

        <Flex>
          <div style={{ width: '1000px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero neque nisi
            odit qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias repudiandae
            similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti eius explicabo libero
            neque nisi odit qui, saepe. Eius error excepturi facere laboriosam? A doloremque fugiat laborum molestias
            repudiandae similique.
          </div>
        </Flex>
      </Modal>
    </>
  );
});

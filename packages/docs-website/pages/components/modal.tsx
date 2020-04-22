import React from 'react';

import { Button, Flex, Modal, Text } from 'ustudio-ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const ModalPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ComponentInfo
      name="Modal"
      description="A portal to another dimension."
      props={{
        title: {
          type: '`string |ReactElement`',
        },
        footer: {
          type: '`ReactElement`',
        },
        isOpen: {
          type: '`boolean`',
          required: true,
        },
        onChange: {
          type: '`(isOpen?: boolean) => void`',
          required: true,
        },
        children: {
          type: '`ReactNode | ReactNode[]`',
          required: true,
        },
      }}
      classNames={['Modal', 'Header', 'Title', 'Content', 'Icon', 'Overlay']}
    >
      <ComponentInfoItem>
        <Button onClick={() => setIsOpen(true)}>Don&apos;t press me</Button>

        <Modal
          title="WTF?"
          footer={
            <Flex alignment={{ horizontal: 'end', vertical: 'center' }}>
              <Flex isInline margin={{ right: 'regular' }}>
                <Button appearance="outlined" intent="negative" onClick={() => setIsOpen(false)}>
                  Close
                </Button>
              </Flex>

              <Button appearance="outlined" intent="positive" onClick={() => setIsOpen(false)}>
                Close too
              </Button>
            </Flex>
          }
          isOpen={isOpen}
          onChange={setIsOpen}
        >
          <Text>I&apos;m in another dimension!</Text>
        </Modal>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default ModalPage;

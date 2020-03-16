import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { Drawer, Button, Text, Grid, Cell, Avatar, Flex } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const Styled = {
  Avatar: styled(Avatar)`
    margin-right: 1rem;
  `,
};

Styled.Avatar.displayName = 'Avatar';

const DrawerPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] = React.useState('left');
  const friendsList = ['John Doe', 'Linus Torvalds', 'Brendan Eich', 'Dan Abramov', 'John Carmack'];

  return (
    <ComponentInfo
      name="Drawer"
      description="Drawer is a side sheet, a surface that contains supplementary content."
      props={{
        isOpen: {
          type: '`boolean`',
          defaultValue: '`false`',
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
        position: {
          type: `\`'left' | 'right' | 'top' | 'bottom'\``,
          defaultValue: `\`'right'\``,
        },
        showOverlay: {
          type: '`boolean`',
          defaultValue: '`false`',
        },
      }}
      classNames={['Drawer']}
    >
      <ComponentInfoItem>
        {['left', 'right', 'top', 'bottom'].map(direction => (
          <Button
            key={direction}
            onClick={() => {
              setIsOpen(true);
              setPosition(direction);
            }}
          >
            Open drawer from the {direction}
          </Button>
        ))}

        <Drawer
          isOpen={isOpen}
          position={position as 'left' | 'right' | 'top' | 'bottom'}
          showOverlay
          onChange={() => setIsOpen(false)}
        >
          <Flex alignment={{ vertical: 'start' }}>
            <Grid xs={{ direction: 'column', gap: 16 }}>
              <Cell>
                <Text variant="h3">Friends list</Text>
              </Cell>
              {
                (friendsList.map(friend => (
                  <Cell key={friend}>
                    <Flex direction="row" alignment={{ vertical: 'center', horizontal: 'start' }}>
                      <Styled.Avatar>{friend}</Styled.Avatar>
                      <Text variant="span">{friend}</Text>
                    </Flex>
                  </Cell>
                )) as unknown) as ReactElement
              }
            </Grid>
          </Flex>
        </Drawer>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default DrawerPage;

import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';

import Drawer from '../index';
import Button from '../../Button';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const drawerStory = storiesOf('Drawer', module);

drawerStory.add('Primary', () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!isOpen)}>Open drawer</Button>

      <Drawer
        isOpen={isOpen}
        showOverlay={boolean('Show overlay', false)}
        position={select('Position', ['top', 'right', 'bottom', 'left'], 'right')}
        onChange={() => setOpen(!isOpen)}
      >
        Drawer
      </Drawer>
    </>
  );
});

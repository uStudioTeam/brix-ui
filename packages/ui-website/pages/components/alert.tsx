import React from 'react';
import { Button, Alert } from '@ustudio/ui';
import { ComponentInfo, ComponentInfoItem } from '../../components';

const AlertPage: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState({} as any);

  return (
    <ComponentInfo
      name="Alert"
      description="Display short, important messages."
      props={{
        children: {
          type: '`string`',
          required: true,
        },
        isOpen: {
          type: '`boolean`',
          required: true,
        },
        onChange: {
          type: '`() => void`',
          required: true,
        },
        horizontalPosition: {
          type: `\`'left' | 'center' | 'right'\``,
          required: true,
        },
        verticalPosition: {
          type: `\`'top' | 'bottom'\``,
          required: true,
        },
        intent: {
          type: `\`'primary' | 'positive' | 'negative'\``,
          defaultValue: `\`'primary'\``,
        },
      }}
      classNames={['Alert', 'Icon', 'Content']}
    >
      <ComponentInfoItem title="Horizontal aligment">
        {['left', 'center', 'right'].map(direction => (
          <React.Fragment key={direction}>
            <Button
              onClick={() => {
                setIsOpen({ [direction]: true });
              }}
            >
              To the {direction}!
            </Button>
            <Alert
              isOpen={isOpen[direction] ?? false}
              onChange={() => setIsOpen({ [direction]: false })}
              horizontalPosition={direction as 'left' | 'right' | 'center'}
              verticalPosition="bottom"
            >
              Peek-a-boo!
            </Alert>
          </React.Fragment>
        ))}
      </ComponentInfoItem>

      <ComponentInfoItem title="Vertical aligment">
        {['top', 'bottom'].map(direction => (
          <React.Fragment key={direction}>
            <Button
              onClick={() => {
                setIsOpen({ [direction]: true });
              }}
            >
              At the {direction}!
            </Button>
            <Alert
              isOpen={isOpen[direction] ?? false}
              onChange={() => setIsOpen({ [direction]: false })}
              horizontalPosition="right"
              verticalPosition={(direction as 'top' | 'bottom') ?? 'top'}
            >
              Booyaa!
            </Alert>
          </React.Fragment>
        ))}
      </ComponentInfoItem>

      <ComponentInfoItem title="Intent">
        {['primary', 'positive', 'negative'].map(intent => (
          <React.Fragment key={intent}>
            <Button
              onClick={() => {
                setIsOpen({ [intent]: true });
              }}
              intent={intent as 'primary'}
            >
              Intentional alert
            </Button>
            <Alert
              isOpen={isOpen[intent] ?? false}
              onChange={() => setIsOpen({ [intent]: false })}
              horizontalPosition="center"
              verticalPosition="bottom"
              intent={intent as 'primary' | 'positive' | 'negative'}
            >
              Say my name.
            </Alert>
          </React.Fragment>
        ))}
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default AlertPage;

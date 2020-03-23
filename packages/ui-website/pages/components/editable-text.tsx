import React, { useState } from 'react';

import { EditableText } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';

const EditableTextPage = () => {
  const [value, setValue] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
    idest laborum.`
  );

  return (
    <ComponentInfo
      name="EditableText"
      description="You can edit text contained in this component."
      props={{
        ...inputProps('string'),
        value: {
          type: `\`string\``,
        },
        onChange: {
          type: `\`(value: string) => void\``,
          required: true,
        },
        children: {
          type: '`ReactNode`',
          required: true,
        },
        defaultValue: {
          type: '`string`',
          required: true,
          description: 'This component is not intended to be empty',
        },
        variant: {
          type: `\`'span' | 'code' | 'small' | 'body' | 'article' | 'caption' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'\``,
          defaultValue: `\`'body'\``,
        },
        appearance: {
          type: `\`'regular' | 'italic' | 'underlined' | 'bold'\``,
          defaultValue: `\`'regular'\``,
        },
        isDefaultEditable: {
          type: '`boolean`',
          defaultValue: '`false`',
        },
        icon: {
          type: '`ReactNode`',
          description: 'Pass your custom icon that will accept internal isEditing prop for style control purposes',
        },
      }}
      classNames={['EditableText', 'TextArea', 'Text', 'Icon']}
    >
      <ComponentInfoItem>
        <EditableText defaultValue="Edit me" onChange={setValue}>
          {value}
        </EditableText>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default EditableTextPage;

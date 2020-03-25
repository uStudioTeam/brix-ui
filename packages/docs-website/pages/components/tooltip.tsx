import React from 'react';

import { Tooltip } from 'ustudio-ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const TooltipPage = () => {
  return (
    <ComponentInfo
      name="Tooltip"
      description="Tooltip displays additional information when the element is hovered."
      props={{
        value: {
          type: '`string`',
          required: true,
        },
        children: {
          type: '`ReactNode`',
          required: true,
        },
        position: {
          type: `\`'left' | 'right' | 'top' | 'bottom'\``,
          required: true,
        },
      }}
      classNames={['TooltipContainer', 'Tooltip', 'Content']}
    >
      <ComponentInfoItem title="Position">
        <Tooltip value="O_o" position="left">
          Left
        </Tooltip>
        <Tooltip value="^_^" position="top">
          Top
        </Tooltip>
        <Tooltip value=">_<" position="bottom">
          Bottom
        </Tooltip>
        <Tooltip value="o_O" position="right">
          Right
        </Tooltip>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default TooltipPage;

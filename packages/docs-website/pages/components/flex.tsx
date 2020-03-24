import { Mixin } from 'ustudio-ui/theme';
import React from 'react';

import { Flex } from 'ustudio-ui';
import styled, { css } from 'styled-components';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const Styled = {
  Flex: styled(Flex)`
    width: 100%;
    flex-direction: column;

    padding: 1rem;
    background-color: var(--c-lightest);
    box-shadow: var(--neumo-shadow);
    border-radius: var(--border-radius);

    ${Mixin.Screen.lg(css`
      width: 50%;
      flex-direction: row;
    `)}
  `,
};

Styled.Flex.displayName = 'Flex';

const FlexPage = () => {
  return (
    <ComponentInfo
      name="Flex"
      description="This component serves as a flex container with automatically adjusted alignment agnostic to direction."
      props={{
        children: {
          type: '`ReactNode`',
        },
        direction: {
          type: `\`'row' | 'column'\``,
          defaultValue: '`row`',
        },
        isReversed: {
          type: '`boolean`',
          description: 'Reverts direction',
        },
        isInline: {
          type: '`boolean`',
          description: 'Displays as inline-flex',
        },
        alignment: {
          type: `
          {
            horizontal?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
            vertical?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
          }`,
        },
      }}
      classNames={['Flex']}
    >
      <ComponentInfoItem title="Styles">
        <Styled.Flex
          alignment={{
            vertical: 'center',
            horizontal: 'center',
          }}
        >
          Flexible box with&nbsp;
          <a href="https://neumorphism.com/" target="_blank" rel="noreferrer noopener">
            neumorphism
          </a>
          &nbsp;as extended style
        </Styled.Flex>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default FlexPage;

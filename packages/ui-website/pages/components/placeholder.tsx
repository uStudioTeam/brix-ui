import React from 'react';

import { Placeholder, Flex } from '@ustudio/ui';
import styled from 'styled-components';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const Styled = {
  Flex: styled(Flex)`
    width: 100%;
  `,
};

Styled.Flex.displayName = 'Flex';

const PlaceholderPage = () => {
  return (
    <ComponentInfo
      name="Placeholder"
      description="Placeholder component serves as a stub on a place of an actual value while it is loading."
      props={{
        variant: {
          type: `\`'text' | 'block'\``,
          defaultValue: `\`'block'\``,
        },
        appearance: {
          type: `\`
{
  width?: string;
  height?: 'code' | 'small' | 'body' | 'article' | 'caption' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' | string;
  borderRadius?: string;
}\``,
          defaultValue: `\`
{
  width?: '100%' | '2rem';
  height?: '100%' | '2rem';
  borderRadius?: var(--border-radius);
}\``,
        },
      }}
      classNames={['Placeholder']}
    >
      <ComponentInfoItem title="Block" description="Accepts height as an actual CSS value.">
        <Placeholder appearance={{ width: '5rem', height: '5rem' }} />
        <Placeholder appearance={{ width: '100%', height: '5rem' }} />
      </ComponentInfoItem>

      <ComponentInfoItem title="Text" description="Accepts height as a name of a Text element to be represented.">
        <Styled.Flex alignment={{ vertical: 'center' }} direction="column">
          <Placeholder variant="text" appearance={{ height: 'h1', width: '25%' }} />
          <Placeholder variant="text" appearance={{ height: 'h2', width: '50%' }} />

          <Placeholder variant="text" appearance={{ height: 'body', width: '90%' }} />
          <Placeholder variant="text" appearance={{ height: 'body', width: '100%' }} />
          <Placeholder variant="text" appearance={{ height: 'body', width: '75%' }} />
        </Styled.Flex>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default PlaceholderPage;

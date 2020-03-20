import React from 'react';

import { Checkbox, Flex, Text } from '@ustudio/ui';

import styled from 'styled-components';
import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';

const Styled = {
  Text: styled(Text)`
    margin-right: 1rem;
  `,
};

Styled.Text.displayName = 'Text';

const CheckboxPage = () => {
  const [value, setValue] = React.useState(false);

  return (
    <ComponentInfo
      name="Checkbox"
      description={`
Allows selecting several items from a set.

${controlledInputDescription('Checkbox')}.`}
      props={inputProps('boolean')}
      classNames={['Container', 'Input', 'Checkbox']}
    >
      <ComponentInfoItem>
        <Flex alignment={{ vertical: 'center' }}>
          <Styled.Text>Default</Styled.Text>
          <Checkbox name="Default" value={value} isRequired onChange={() => setValue(!value)} />
        </Flex>
        <Flex alignment={{ vertical: 'center' }}>
          <Styled.Text>Disabled</Styled.Text>
          <Checkbox name="Disabled" value={value} onChange={() => setValue(!value)} isDisabled />
        </Flex>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default CheckboxPage;

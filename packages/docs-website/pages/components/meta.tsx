import React from 'react';
import styled from 'styled-components';

import { Meta } from 'ustudio-ui';
import Flex from 'ustudio-ui/components/Flex';
import useMediaQuery from 'ustudio-ui/hooks/use-media-query';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const MetaContainer = styled(Flex).attrs<{ isXs: boolean }>(({ isXs }) => ({
  direction: isXs ? 'row' : 'column',
  alignment: { horizontal: 'space-around', vertical: isXs ? 'end' : 'start' },
}))<{ isXs: boolean }>`
  margin: calc(var(--i-regular) * -1);

  & > * {
    margin: var(--i-regular);
  }
`;
MetaContainer.displayName = 'Flex';

const MetaPage = () => {
  const isXs = useMediaQuery('screen and (min-width: 576px)');

  return (
    <ComponentInfo
      name="Meta"
      description="Meta component is used to represent key-value pairs of data."
      props={{
        children: {
          type: '`ReactNode`',
          required: true,
        },
        variant: {
          type: `\`'small' | 'large'\``,
          defaultValue: `\`'small'\``,
        },
        title: {
          type: '`ReactNode`',
        },
      }}
      classNames={['Meta', 'Title', 'Value']}
    >
      <ComponentInfoItem>
        <MetaContainer isXs={isXs}>
          <Meta title="First Name">John</Meta>

          <Meta title="Last Name">Doe</Meta>
        </MetaContainer>
      </ComponentInfoItem>

      <ComponentInfoItem>
        <MetaContainer isXs={isXs}>
          <Meta variant="large">John</Meta>

          <Meta variant="large" title="Last Name">
            Doe
          </Meta>

          <Meta variant="large" title="Web-site">
            <a href="https://en.wikipedia.org/wiki/John_Doe" target="_blank" rel="noopener noreferrer">
              Personal web page
            </a>
          </Meta>
        </MetaContainer>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default MetaPage;

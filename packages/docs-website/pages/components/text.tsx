import React from 'react';

import { Text, Grid, Cell, Flex } from 'ustudio-ui';

import styled from 'styled-components';
import { ComponentInfo, ComponentInfoItem } from '../../components';

const Styled = {
  Grid: styled(Grid)`
    grid-gap: 1rem;
    grid-auto-flow: row;
  `,
  AlignmentContainer: styled(Flex)`
    width: 100%;
  `,
};

Styled.Grid.displayName = 'Grid';
Styled.AlignmentContainer.displayName = 'AlignmentContainer';

const TextPage = () => {
  return (
    <ComponentInfo
      name="Text"
      props={{
        children: {
          type: '`ReactNode`',
          required: true,
        },
        variant: {
          type: `\`'span' | 'code' | 'small' | 'body' | 'article' | 'caption' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'\``,
          defaultValue: `\`'body'\``,
        },
        appearance: {
          type: `\`'regular' | 'italic' | 'underlined' | 'bold'\``,
          defaultValue: `\`'regular'\``,
        },
        align: {
          type: `\`'left' | 'center' | 'right'\``,
          defaultValue: `\`'inherit'\``,
        },
        color: {
          type: `\`'string'\``,
          defaultValue: `\`'inherit'\``,
          description:
            'It is possible to specify a color in any recording format (HEX, RGB, RGBA, HSL, CSS Custom properties)',
        },
      }}
      classNames={['Text']}
    >
      <ComponentInfoItem>
        <Styled.Grid
          xs={{
            gap: 16,
            direction: 'column',
            template: '6fr 2fr 1fr',
          }}
        >
          <Cell>
            <Flex direction="column">
              <Text variant="h1" color="var(--c-primary)">
                h1: Heading 1
              </Text>
              <Text variant="h2" color="var(--c-primary-light)">
                h2: Heading 2
              </Text>
              <Text variant="h3" color="var(--c-positive)">
                h3: Heading 3
              </Text>
              <Text variant="h4" color="var(--c-positive-light)">
                h4: Heading 4
              </Text>
              <Text variant="h5" color="var(--c-negative)">
                h5: Heading 5
              </Text>
              <Text variant="h6" color="var(--c-negative-light)">
                h6: Heading 6
              </Text>
              <Text variant="caption">caption: Lorem ipsum</Text>
            </Flex>
          </Cell>
          <Cell>
            <Flex direction="column">
              <Text variant="body">body: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Text variant="article">article: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Text variant="code">code: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Flex>
          </Cell>
          <Cell>
            <Flex direction="column">
              <Text variant="span">span: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Text variant="small">small: Lorem ipsum</Text>
            </Flex>
          </Cell>
        </Styled.Grid>
      </ComponentInfoItem>

      <ComponentInfoItem title="Variant 'body'" description="Body accepts any variant of an 'appearance' prop.">
        <Styled.Grid
          xs={{
            direction: 'column',
          }}
        >
          <Cell>
            <Flex direction="column">
              <Text appearance="regular">regular: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Text appearance="bold"> bold: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Text appearance="italic"> italic: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Text appearance="underlined">underlined: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Flex>
          </Cell>
        </Styled.Grid>
      </ComponentInfoItem>

      <ComponentInfoItem title="Variant 'article'" description="Article can not be bold.">
        <Styled.Grid xs={{ direction: 'column' }}>
          <Cell>
            <Flex direction="column">
              <Text variant="article" appearance="regular">
                regular: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text variant="article" appearance="italic">
                italic: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text variant="article" appearance="underlined">
                underlined: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Flex>
          </Cell>
        </Styled.Grid>
      </ComponentInfoItem>

      <ComponentInfoItem title="Alignment" direction="column">
        <Styled.AlignmentContainer direction="column">
          <Text align="left">Lorem ipsum dolor sit amet, consectetur adipiscing left.</Text>
          <Text align="center">Lorem ipsum dolor sit amet, consectetur adipiscing center.</Text>
          <Text align="right">Lorem ipsum dolor sit amet, consectetur adipiscing right.</Text>
        </Styled.AlignmentContainer>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default TextPage;

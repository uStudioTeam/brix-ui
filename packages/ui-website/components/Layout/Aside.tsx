import React, { FC, ReactNode } from 'react';

import { useRouter } from 'next/router';

import styled, { css } from 'styled-components';
import { Text } from '@ustudio/ui';
import { Mixin } from '@ustudio/ui/theme';

import { Link } from '../../shared';

import { transformToKebabCase } from '../../utils';

const Styled = {
  Aside: styled.aside`
    flex: 1;

    height: 100vh;

    position: relative;
    background-color: var(--c-lightest);

    &:before {
      display: none;

      content: '';
      position: absolute;
      right: 0;
      top: 54px;

      height: 100%;
      width: 0.5rem;
      background: linear-gradient(to right, var(--c-lightest), var(--c-light));
    }

    ${Mixin.Screen.lg(css`
      flex: 0.2 0 20%;

      &:before {
        display: block;
      }
    `)}
  `,
  Container: styled.div`
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: calc(54px + 2rem) 2rem 4rem;
  `,

  List: styled.ul`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 0.5rem;
  `,
  GroupTitle: styled(Text)`
    color: var(--c-dark);
    margin: 1rem 0 0;
    white-space: nowrap;
  `,
  CurrentLink: styled(Text)`
    color: var(--c-darkest);
  `,
};

const mapComponentsGroup = (pathname: string): (([title, components]: [string, string[]]) => ReactNode) => {
  return ([title, components]) => (
    <React.Fragment key={title}>
      <Styled.GroupTitle variant="h6">{title}</Styled.GroupTitle>

      {components
        .sort((componentA, componentB) => componentA.localeCompare(componentB))
        .map(component => (
          <li key={component}>
            {new RegExp(`^.*/${transformToKebabCase(component)}$`).test(pathname) ? (
              <Styled.CurrentLink>{component}</Styled.CurrentLink>
            ) : (
              <Link href={`/components/${transformToKebabCase(component)}`}>
                <a>{component}</a>
              </Link>
            )}
          </li>
        ))}
    </React.Fragment>
  );
};

const Aside: FC<{ className?: string }> = ({ className }) => {
  const { pathname } = useRouter();

  return (
    <Styled.Aside className={className}>
      <Styled.Container>
        <Text variant="h3">Components</Text>

        <Styled.List>
          {([
            ['Content', ['Avatar', 'Badge', 'Meta', 'Tag', 'Dropdown']],
            ['Building blocks', ['Flex', 'Grid']],
            ['Typography', ['Text', 'Editable text']],
            ['Overlays', ['Alert', 'Modal', 'Drawer', 'Tooltip']],
            [
              'Inputs',
              [
                'Button',
                'Text input',
                'Text area',
                'Switch',
                'Slider',
                'Number input',
                'File input',
                'Checkbox',
                'RadioGroup',
                'Single select',
                'Multiple select',
              ],
            ],
            ['Navigation', ['Placeholder', 'Progress', 'Spinner', 'Tabs']],
          ] as Array<[string, string[]]>).map(mapComponentsGroup(pathname))}
        </Styled.List>
      </Styled.Container>
    </Styled.Aside>
  );
};

export default Aside;

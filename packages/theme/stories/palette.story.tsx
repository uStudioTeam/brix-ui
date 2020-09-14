import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { getLuminance, transparentize } from 'polished';
import { Story } from '@storybook/react';

import { capitalize, getCssVariable } from '@ustudio-ui/utils/functions';
import { Variable } from '@ustudio-ui/types/css';
import Flex from '@ustudio-ui/core/flex';
import Text from '@ustudio-ui/core/text';

import { useTheme } from '../src/use-theme';

export default {
  title: 'Theme/Palette',
};

const Styled = {
  Shade: styled.button<{
    size: 'small' | 'large';
    $color: string;
  }>(({ size, $color: color, theme }) => {
    const isBright = theme.mode
      ? getLuminance(theme.palette[color as keyof typeof theme['palette']]) > 0.91
      : getLuminance(theme.palette[color as keyof typeof theme['palette']]) < 0.02;

    return css`
      position: relative;

      background-color: ${getCssVariable(Variable.Color, color)};

      border-radius: 2px;
      border: ${`1px solid ${isBright ? `var(--c-faint-weak-up)` : 'transparent'}`};

      transition: all 200ms;

      &:hover {
        box-shadow: 0 2px 8px 0 ${transparentize(0.7, theme.colorHelper.parseColor(color))};
      }

      ${size === 'small'
        ? css`
            width: 32px;
            height: 12px;
          `
        : css`
            width: 64px;
            height: 24px;
          `};
    `;
  }),
  Tooltip: styled(Flex).attrs(() => ({
    align: 'center',
    padding: '1px 6px 2px',
  }))<{
    isShown: boolean;
  }>(
    ({ isShown }) => css`
      position: absolute;
      bottom: calc(100% + 4px);
      left: 50%;

      background-color: var(--c-faint-weak);
      border-radius: 2px;

      opacity: ${Number(isShown)};

      transition: all 200ms;

      z-index: 2;
      pointer-events: ${isShown ? 'all' : 'none'};

      transform: translateX(-50%);
    `
  ),
};

const Shade: FC<{
  size: 'small' | 'large';
  color: string;
}> = ({ size, color }) => {
  const [isTooltipShown, setTooltipShown] = useState(false);
  const { palette } = useTheme();

  return (
    <Styled.Shade
      size={size}
      $color={color}
      onMouseOver={() => setTooltipShown(true)}
      onMouseOut={() => setTooltipShown(false)}
      onClick={() => {
        navigator.clipboard.writeText(palette[color as keyof typeof palette]);
      }}
    >
      <Styled.Tooltip isShown={isTooltipShown}>
        <Text variant="small">{palette[color as keyof typeof palette]}</Text>
      </Styled.Tooltip>
    </Styled.Shade>
  );
};

const Family: FC<{
  name: string;
}> = ({ name }) => {
  return (
    <Flex
      direction="column"
      align="center"
      gap={{
        vertical: '16px',
      }}
    >
      <Text variant="h2">{capitalize(name)}</Text>

      <Flex
        gap={{
          horizontal: '24px',
        }}
      >
        {['strong', 'weak'].map((member) => {
          return (
            <Flex
              key={member}
              direction="column"
              gap={{
                vertical: '12px',
              }}
              align="center"
            >
              <Text variant="h4">{member}</Text>

              <Flex
                direction="column"
                align="center"
                gap={{
                  vertical: '4px',
                }}
              >
                {['up', '', 'down'].map((shade) => {
                  return (
                    <Shade
                      key={shade}
                      size={shade ? 'small' : 'large'}
                      color={`${name}-${member}${shade ? `-${shade}` : ''}`}
                    />
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export const Colors: Story = () => {
  return (
    <Flex
      align="center"
      gap={{
        horizontal: '64px',
      }}
    >
      {['base', 'faint', 'accent', 'critical', 'success'].map((family) => (
        <Family key={family} name={family} />
      ))}
    </Flex>
  );
};

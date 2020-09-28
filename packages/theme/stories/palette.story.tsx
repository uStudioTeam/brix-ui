import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { getLuminance, transparentize } from 'polished';
import { Story } from '@storybook/react';

import { capitalize, objectValues } from '@brix-ui/utils/functions';
import { Color } from '@brix-ui/types/palette';
import { defaultPalette } from '@brix-ui/theme/palette';
import { Values } from '@brix-ui/utils/types';

import Flex from '@brix-ui/core/flex';
import Text from '@brix-ui/core/text';

export default {
  title: 'Theme/Palette',

  argTypes: objectValues(Color).reduce((argTypes, color) => {
    return Object.assign(argTypes, {
      [color]: {
        control: 'color',
      },
    });
  }, {}),
  args: objectValues(Color).reduce((args, color) => {
    return Object.assign(args, {
      [color]: defaultPalette.light[color as keyof typeof defaultPalette[keyof typeof defaultPalette]],
    });
  }, {}),
};

type PaletteProps = Record<Values<typeof Color>, string>;

const Styled = {
  Shade: styled.button<{
    size: 'small' | 'large';
    $color: string;
  }>(({ size, $color, theme }) => {
    const color = theme.colorHelper.parseColor($color);
    const isBright = theme.mode ? getLuminance(color) > 0.91 : getLuminance(color) < 0.02;

    return css`
      position: relative;

      background-color: ${color};

      border-radius: 2px;
      border: ${`1px solid ${isBright ? `var(--c-faint-weak-up)` : 'transparent'}`};

      transition: all 200ms;

      &:hover {
        box-shadow: 0 2px 8px 0 ${transparentize(0.7, color)};
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

  return (
    <Styled.Shade
      size={size}
      $color={color}
      onMouseOver={() => setTooltipShown(true)}
      onMouseOut={() => setTooltipShown(false)}
      onClick={() => {
        navigator.clipboard.writeText(color);
      }}
    >
      <Styled.Tooltip isShown={isTooltipShown}>
        <Text variant="small">{color}</Text>
      </Styled.Tooltip>
    </Styled.Shade>
  );
};

const Family: FC<{
  name: string;
  colors: PaletteProps;
}> = ({ name, colors }) => {
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
                  const color = `${name}-${member}${shade ? `-${shade}` : ''}`;

                  return (
                    <Shade
                      key={shade}
                      size={shade ? 'small' : 'large'}
                      color={colors[color as keyof PaletteProps] || color}
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

export const Colors: Story<PaletteProps> = (args) => {
  return (
    <Flex
      align="center"
      gap={{
        horizontal: '64px',
      }}
    >
      {['base', 'faint', 'accent', 'critical', 'success'].map((family) => (
        <Family key={family} name={family} colors={args} />
      ))}
    </Flex>
  );
};
